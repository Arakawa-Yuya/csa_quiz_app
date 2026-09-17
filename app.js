// ServiceNow CSA クイズアプリ ロジック
(function () {
  "use strict";

  const LS_WRONG = "csa_quiz_wrong_ids";
  const LS_FAV = "csa_quiz_fav_ids";

  const el = (id) => document.getElementById(id);

  // ---------- localStorage ヘルパー ----------
  function loadSet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (e) {
      return new Set();
    }
  }
  function saveSet(key, set) {
    try {
      localStorage.setItem(key, JSON.stringify(Array.from(set)));
    } catch (e) { /* storage unavailable: no-op */ }
  }

  let wrongIds = loadSet(LS_WRONG);
  let favIds = loadSet(LS_FAV);

  // ---------- 出題状態 ----------
  let session = {
    queue: [],      // 出題予定の問題配列
    index: 0,       // 現在の問題インデックス
    correctCount: 0,
    answered: false,
    results: []     // {q, chosenIndex, correct}
  };

  let selectedCount = "10";

  // ---------- ユーティリティ ----------
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    el("screen-" + name).classList.add("active");
    window.scrollTo(0, 0);
  }

  function currentMode() {
    const r = document.querySelector('input[name="mode"]:checked');
    return r ? r.value : "all";
  }

  // ---------- ホーム画面更新 ----------
  function refreshHome() {
    el("stat-total").textContent = QUIZ_DATA.length;
    el("stat-wrong").textContent = wrongIds.size;
    el("stat-fav").textContent = favIds.size;
    el("wrong-count-inline").textContent = wrongIds.size ? `(${wrongIds.size}問)` : "(0問)";
    el("fav-count-inline").textContent = favIds.size ? `(${favIds.size}問)` : "(0問)";
  }

  // ---------- 出題数ボタン ----------
  document.querySelectorAll(".count-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".count-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedCount = btn.dataset.count;
    });
  });
  // デフォルト選択
  document.querySelector('.count-btn[data-count="10"]').classList.add("selected");

  // ---------- クイズ開始 ----------
  el("btn-start").addEventListener("click", () => {
    const mode = currentMode();
    let pool;
    if (mode === "wrong") {
      pool = QUIZ_DATA.filter((q) => wrongIds.has(q.id));
      if (pool.length === 0) {
        alert("復習すべき「間違えた問題」がまだありません。まずは通常出題に挑戦しましょう。");
        return;
      }
    } else if (mode === "favorite") {
      pool = QUIZ_DATA.filter((q) => favIds.has(q.id));
      if (pool.length === 0) {
        alert("お気に入り登録された問題がまだありません。問題画面の☆マークから登録できます。");
        return;
      }
    } else {
      pool = QUIZ_DATA.slice();
    }

    pool = shuffle(pool); // ランダム出題・重複なし（同一問題は1回のみプール内に存在）

    let n;
    if (selectedCount === "all") {
      n = pool.length;
    } else {
      n = Math.min(parseInt(selectedCount, 10), pool.length);
    }
    pool = pool.slice(0, n);

    session = { queue: pool, index: 0, correctCount: 0, answered: false, results: [] };
    showScreen("quiz");
    renderQuestion();
  });

  // ---------- 問題描画 ----------
  function renderQuestion() {
    const q = session.queue[session.index];
    session.answered = false;

    el("progress-text").textContent = `${session.index + 1} / ${session.queue.length}`;
    el("progress-fill").style.width = `${((session.index) / session.queue.length) * 100}%`;
    el("score-live").textContent = session.correctCount;

    const typeBadge = el("q-type-badge");
    if (q.type === "scenario") {
      typeBadge.textContent = "シナリオ問題";
      typeBadge.classList.add("scenario");
    } else {
      typeBadge.textContent = "選択問題";
      typeBadge.classList.remove("scenario");
    }
    el("q-no-badge").textContent = `表No. ${q.no}`;
    el("q-text").textContent = q.question;

    const favBtn = el("btn-fav");
    favBtn.textContent = favIds.has(q.id) ? "★" : "☆";
    favBtn.classList.toggle("active", favIds.has(q.id));

    const choicesEl = el("choices");
    choicesEl.innerHTML = "";
    q.choices.forEach((choiceText, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.innerHTML = `<span class="num">${i + 1}</span><span>${choiceText}</span>`;
      btn.addEventListener("click", () => selectAnswer(i));
      choicesEl.appendChild(btn);
    });

    el("feedback-card").classList.add("hidden");
  }

  // ---------- お気に入りトグル ----------
  el("btn-fav").addEventListener("click", () => {
    const q = session.queue[session.index];
    if (!q) return;
    if (favIds.has(q.id)) favIds.delete(q.id);
    else favIds.add(q.id);
    saveSet(LS_FAV, favIds);
    el("btn-fav").textContent = favIds.has(q.id) ? "★" : "☆";
    el("btn-fav").classList.toggle("active", favIds.has(q.id));
  });

  // ---------- 回答処理（簡素化：タップ即判定 / 数字キー対応） ----------
  function selectAnswer(choiceIndex) {
    if (session.answered) return;
    session.answered = true;

    const q = session.queue[session.index];
    const correct = choiceIndex === q.answer;
    if (correct) session.correctCount++;

    // 正誤履歴の更新（復習リスト管理）
    if (correct) {
      wrongIds.delete(q.id);
    } else {
      wrongIds.add(q.id);
    }
    saveSet(LS_WRONG, wrongIds);

    session.results.push({ q, chosenIndex: choiceIndex, correct });

    // 選択肢の見た目更新
    const buttons = el("choices").querySelectorAll(".choice-btn");
    buttons.forEach((btn, i) => {
      btn.classList.add("disabled");
      if (i === q.answer) btn.classList.add("correct");
      else if (i === choiceIndex) btn.classList.add("wrong");
      else btn.classList.add("dim");
    });

    // フィードバック表示
    const resultEl = el("feedback-result");
    resultEl.textContent = correct ? "⭕ 正解です！" : "❌ 不正解です";
    resultEl.className = "feedback-result " + (correct ? "correct" : "wrong");
    el("exp-no").textContent = q.no;
    el("exp-text").textContent = q.explanation;
    el("feedback-card").classList.remove("hidden");
    el("score-live").textContent = session.correctCount;

    el("feedback-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 数字キー(1-4)での回答をサポート（回答を簡素化する仕組み）
  document.addEventListener("keydown", (e) => {
    if (!el("screen-quiz").classList.contains("active")) return;
    if (session.answered) {
      if (e.key === "Enter") { el("btn-next").click(); }
      return;
    }
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4) {
      const buttons = el("choices").querySelectorAll(".choice-btn");
      if (buttons[n - 1]) selectAnswer(n - 1);
    }
  });

  // ---------- 次の問題へ ----------
  el("btn-next").addEventListener("click", () => {
    session.index++;
    if (session.index >= session.queue.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  });

  // ---------- クイズ中断してホームへ ----------
  el("btn-quit").addEventListener("click", () => {
    if (confirm("クイズを中断してホームに戻りますか？（ここまでの正誤は記録されます）")) {
      refreshHome();
      showScreen("home");
    }
  });

  // ---------- 結果画面 ----------
  function finishQuiz() {
    const total = session.results.length;
    const correct = session.correctCount;
    const rate = total ? Math.round((correct / total) * 100) : 0;

    el("progress-fill").style.width = "100%";
    el("result-score").textContent = `${correct} / ${total}`;
    el("result-rate").textContent = `正答率 ${rate}%`;
    el("result-title").textContent = rate === 100 ? "🏆 全問正解！素晴らしい！" : (rate >= 70 ? "🎉 お疲れさまでした！" : "📚 復習して再挑戦しましょう");

    const wrongList = session.results.filter((r) => !r.correct);
    const listEl = el("result-wrong-list");
    listEl.innerHTML = "";
    if (wrongList.length === 0) {
      const li = document.createElement("li");
      li.className = "empty-note";
      li.textContent = "今回間違えた問題はありません！🎉";
      listEl.appendChild(li);
    } else {
      wrongList.forEach((r) => {
        const li = document.createElement("li");
        li.className = "review-item";
        li.innerHTML = `
          <div class="r-meta">表No. ${r.q.no} ／ ${r.q.type === "scenario" ? "シナリオ問題" : "選択問題"}</div>
          <div class="r-q">${r.q.question}</div>
          <div class="r-ans">あなたの回答: ${r.q.choices[r.chosenIndex]}<br>
          正解: <span class="ok">${r.q.choices[r.q.answer]}</span></div>
        `;
        listEl.appendChild(li);
      });
    }

    refreshHome();
    showScreen("result");
  }

  el("btn-restart").addEventListener("click", () => {
    el("btn-start").click();
  });
  el("btn-home").addEventListener("click", () => {
    refreshHome();
    showScreen("home");
  });

  // ---------- 初期化 ----------
  refreshHome();
  showScreen("home");
})();
