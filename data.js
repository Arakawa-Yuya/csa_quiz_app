// ServiceNow CSA 試験対策クイズ データ
// 出典: ServierNow CSA 試験 ILT 受講時に受けた重要ポイント.pdf
// no: 元PDF内の表の行番号（複数関連する場合はカンマ区切り）
// type: "single"（通常の4択）または "scenario"（シナリオ問題）
const QUIZ_DATA = [
  {
    id: 1,
    no: "1",
    type: "single",
    question: "更新セットをXMLからインポートして適用する際の正しい手順の順序はどれですか？",
    choices: [
      "取得 → プレビュー → コミット",
      "コミット → 取得 → プレビュー",
      "プレビュー → 取得 → コミット",
      "取得 → コミット → プレビュー"
    ],
    answer: 0,
    explanation: "[All] > [System Update Sets] > [Retrieved Update Sets] から [Import Update Set from XML] でファイルをアップロードした後、「取得」→「プレビュー」→「コミット」の順に処理します。"
  },
  {
    id: 2,
    no: "2,3",
    type: "single",
    question: "更新セットのステータスが [In progress] のとき、新しい更新セットを構成変更のターゲットとして選択するために管理者がクリックする操作はどれですか？",
    choices: [
      "Run Preview Again",
      "Submit and Make Current",
      "Auto Map Matching Fields",
      "Import Update Set from XML"
    ],
    answer: 1,
    explanation: "ピッカーが有効な状態で更新セットのステータスが [In progress] の場合、[Submit and Make Current] をクリックすることで、新しい更新セットを構成変更のターゲットとして選択できます。"
  },
  {
    id: 3,
    no: "3,4",
    type: "single",
    question: "更新セットに関する説明として正しいものはどれですか？",
    choices: [
      "更新セットはユーザーのパスワードを管理する機能である",
      "更新セットは構成変更をまとめて管理し、あるインスタンスから別のインスタンスへ移行できる機能である",
      "更新セットはレポートを自動生成する機能である",
      "更新セットはカタログアイテムの一種である"
    ],
    answer: 1,
    explanation: "更新セットとは、構成変更をまとめて管理し、あるインスタンスから別のインスタンスへ移行できる機能です。インスタンス間で構成やカスタマイズ設定を移動する場合、名前付き更新セットを使用する必要があります。"
  },
  {
    id: 4,
    no: "5",
    type: "single",
    question: "クライアントスクリプトのタイプのうち、「フォームが送信されると実行される」ものはどれですか？",
    choices: ["onLoad()", "onChange()", "onSubmit()", "onCellEdit()"],
    answer: 2,
    explanation: "onSubmit() はフォームが送信されると実行されます。onLoad() はフォームロード時、onChange() は特定フィールドの値変更時、onCellEdit() はリストエディターでのセル値変更時に実行されます。"
  },
  {
    id: 5,
    no: "5",
    type: "single",
    question: "リストエディターを使用してリストのセルの値が変更されたときに実行されるクライアントスクリプトのタイプはどれですか？",
    choices: ["onLoad()", "onCellEdit()", "onSubmit()", "onChange()"],
    answer: 1,
    explanation: "onCellEdit() は、リストエディターを使用してリストのセルの値が変更されると実行されます。"
  },
  {
    id: 6,
    no: "6",
    type: "single",
    question: "データポリシーの主な目的として最も適切なものはどれですか？",
    choices: [
      "フィールドを必須や読み取り専用に設定し、データの一貫性を確保すること",
      "フォームのレイアウトを変更すること",
      "通知の送信先を決定すること",
      "ユーザーのロールを昇格させること"
    ],
    answer: 0,
    explanation: "データポリシーは、必須や読み取り専用にフィールドを設定し、データの一貫性を確保するために使用します。インポート時やスクリプト・ユーザーによる入力時のデータ操作を防ぐことができ、リストにおいても動作します。"
  },
  {
    id: 7,
    no: "7",
    type: "single",
    question: "UIポリシーについて正しい説明はどれですか？",
    choices: [
      "UIポリシーはサーバーサイドで実行される",
      "UIポリシーはフォームやその情報を動的に変更するためのルールであり、クライアントサイドで実行される",
      "UIポリシーはデータベースの構造を変更する機能である",
      "UIポリシーは通知メールのテンプレートを管理する機能である"
    ],
    answer: 1,
    explanation: "UI（ユーザーインターフェイス）ポリシーは、フォームやその情報を動的に変更するためのルールで、クライアントサイドで実行されます。"
  },
  {
    id: 8,
    no: "8",
    type: "single",
    question: "UIポリシーを使用してフォーム上のフィールドに設定できる組み合わせとして誤っているものはどれですか？",
    choices: [
      "必須 or 任意",
      "表示 or 非表示",
      "読み取り専用 or 編集可能",
      "暗号化 or 非暗号化"
    ],
    answer: 3,
    explanation: "UIポリシーでは、フィールドを「必須or任意」「表示or非表示」「読み取り専用or編集可能」に設定できます。暗号化の制御はUIポリシーの機能ではありません。"
  },
  {
    id: 9,
    no: "9",
    type: "scenario",
    question: "シナリオ：アサイン先グループが更新された際に、[Assigned to] の値が新しいグループのメンバーでなければ、そのフィールド値を自動的に消去したいと考えています。この要件を実現するために最も適した機能はどれですか？",
    choices: [
      "ビジネスルール",
      "クライアントスクリプト",
      "データポリシー",
      "通知"
    ],
    answer: 1,
    explanation: "クライアントスクリプトの多い実装例として、別フィールドの値の変更に応じてフィールドの値を変更するものがあります。アサイン先グループの変更に応じて [Assigned to] を消去する処理はクライアントスクリプトで実装できます。"
  },
  {
    id: 10,
    no: "9",
    type: "single",
    question: "「親インシデントで何かが起こった場合に子インシデントを更新する」といった、レコードやフィールドの変更に応じて他のアクションをトリガーする機能はどれですか？",
    choices: ["ビジネスルール", "UIポリシー", "レコードプロデューサー", "変換マップ"],
    answer: 0,
    explanation: "ビジネスルールは通知をトリガーするだけでなく、レコードやフィールドの変更に応じてその他のアクションをトリガーすることができます。親インシデントの変更に応じて子インシデントを更新する例が典型です。"
  },
  {
    id: 11,
    no: "9",
    type: "single",
    question: "必須フィールドだけでなく読み取り専用フィールドも設定でき、インポート時やスクリプト・ユーザーによる入力時のデータ操作を防ぎ、リストでも動作する機能はどれですか？",
    choices: ["データポリシー", "クライアントスクリプト", "ビジネスルール", "通知"],
    answer: 0,
    explanation: "データポリシーは、必須フィールドだけでなく読み取り専用フィールドも設定でき、インポート時またはスクリプト/ユーザーによる入力時にデータ操作がされないようにできます。さらにリストにおいても動作します。"
  },
  {
    id: 12,
    no: "10,11",
    type: "single",
    question: "通知を作成する際に検討すべき3つの要素の組み合わせとして正しいものはどれですか？",
    choices: [
      "When to Send / Who will Receive / What it will contain",
      "Where to Send / How to Receive / Why it will contain",
      "When to Approve / Who will Approve / What to Approve",
      "When to Send / How Many to Send / Cost"
    ],
    answer: 0,
    explanation: "通知の作成では「When to Send（いつ送るか）」「Who will Receive（誰が受け取るか）」「What it will contain（何を含むか）」を検討します。"
  },
  {
    id: 13,
    no: "11",
    type: "single",
    question: "メール通知の設定モジュールにアクセスするための正しいナビゲーションパスはどれですか？",
    choices: [
      "[All] > [System Notification] > [Email] > [Notifications]",
      "[All] > [Service Catalog] > [Catalog Definitions]",
      "[All] > [System Definition] > [Tables]",
      "[All] > [Platform Analytics] > [Library]"
    ],
    answer: 0,
    explanation: "メール通知は [All] > [System Notification] > [Email] > [Notifications] からアクセスします。"
  },
  {
    id: 14,
    no: "12,13",
    type: "single",
    question: "Visualization Designer で可視化を作成する際の構成要素「Data」「Type」「Group by and Sorting」「Presentation」のうち、色分けやタイトルなど可視化の外観・凡例を調整するものはどれですか？",
    choices: ["Data", "Type", "Group by and Sorting", "Presentation"],
    answer: 3,
    explanation: "Presentationは、色分けやタイトルなどの可視化の外観や凡例を調整する項目です。Dataはデータソースの選択、Typeはチャートの表示方法（20種類以上）、Group by and Sortingはグループ化や計算を行います。"
  },
  {
    id: 15,
    no: "14",
    type: "single",
    question: "Data Visualizations のライブラリにアクセスする正しいパスはどれですか？",
    choices: [
      "[All] > [Platform Analytics] > [Library] > [Data Visualizations]",
      "[All] > [System Definition] > [Database Views]",
      "[All] > [Service Catalog] > [Catalog Definitions] > [Maintain Items]",
      "[All] > [User Administration] > [Groups]"
    ],
    answer: 0,
    explanation: "Data Visualizations には [All] > [Platform Analytics] > [Library] > [Data Visualizations] からアクセスします。"
  },
  {
    id: 16,
    no: "15",
    type: "single",
    question: "Workflow Studio のプレイブックの説明として正しいものはどれですか？",
    choices: [
      "企業間で共通のワークフローを作成し、単一の統一プロセスを作成でき、エンドユーザーに簡素化されたタスク指向のプロセスビューを提供できる",
      "CMDBクラス階層を一元的に確認する機能である",
      "インポートセットのデータをターゲットテーブルへ変換する機能である",
      "ナレッジ記事の承認フローを自動生成する機能である"
    ],
    answer: 0,
    explanation: "Workflow Studioのプレイブックにより、オーナーは企業間で共通のワークフローを作成し、単一の統一プロセスを作成できます。エンドユーザーに簡素化されたタスク指向のプロセスビューを提供することもできます。"
  },
  {
    id: 17,
    no: "16",
    type: "single",
    question: "Integration Hub において、サードパーティ製アプリケーションと連携するために事前に組み込まれている統合アクションのことを何と呼びますか？",
    choices: ["プレイブック", "スポーク", "コアレス", "データピル"],
    answer: 1,
    explanation: "Integration Hubには、一般的なサードパーティ製アプリケーションと連携するためのさまざまな統合アクションが事前に組み込まれており、これらはスポークと呼ばれます。"
  },
  {
    id: 18,
    no: "17",
    type: "single",
    question: "フローデザイナーでデータピルに保存されているデータをフローの適切なフィールドに参照させる操作方法として正しいものはどれですか？",
    choices: [
      "SQLクエリを直接記述する",
      "[Data] セクションからデータピルをドラッグアンドドロップするか、[Data Pill Picker] アイコンをクリックする",
      "変換マップを新規作成する",
      "ACLルールを追加する"
    ],
    answer: 1,
    explanation: "データピルに保存されているデータを参照するには、[Data] セクションからフローの適切なフィールドにデータピルをドラッグアンドドロップするか、[Data Pill Picker] アイコンをクリックします。"
  },
  {
    id: 19,
    no: "18",
    type: "single",
    question: "フローコンポーネントのトリガーのうち、「指定された日時またはスケジュールされた間隔でフローを実行する」ものはどれですか？",
    choices: ["レコードベースのトリガー", "スケジュールベースのトリガー", "アプリケーションベースのトリガー", "ユーザーベースのトリガー"],
    answer: 1,
    explanation: "スケジュールベースのトリガーは、指定された日時またはスケジュールされた間隔でフローを実行します。レコードベースのトリガーはレコードの作成・更新時、アプリケーションベースのトリガーはアプリケーション固有の条件が満たされたときに実行されます。"
  },
  {
    id: 20,
    no: "19,20",
    type: "single",
    question: "フローの特徴として誤っているものはどれですか？",
    choices: [
      "承認、タスク、通知、レコード操作などのビジネスロジックを自動化する",
      "単一環境でビジネスプロセスを構築および視覚化できる",
      "フローロジックについて自然言語で説明できる",
      "フローはデータベースビューを作成するための唯一の手段である"
    ],
    answer: 3,
    explanation: "フローは承認・タスク・通知・レコード操作等のビジネスロジックを自動化し、単一環境で構築・視覚化でき、自然言語での説明も可能です。データベースビューの作成はフローの機能ではありません。"
  },
  {
    id: 21,
    no: "20",
    type: "single",
    question: "Flow Designer のコンテンツを拡張し、SLAタスクトリガーでフローを作成できるようにする仕組みはどれですか？",
    choices: ["Integration Hub のサブスクリプションやスポークのインストール", "CIクラスマネージャー", "スキーママップ", "コアレスフィールド"],
    answer: 0,
    explanation: "Integration Hubのサブスクリプションやスポークのインストールによって、Flow Designerコンテンツを拡張でき、SLAタスクトリガーでフローを作成できるようになります。"
  },
  {
    id: 22,
    no: "21",
    type: "single",
    question: "チャット型インターフェイス内で情報を取得し、意思決定を下し、一般的な作業タスクを実施するユーザーを支援する会話型プラットフォームはどれですか？",
    choices: ["レコードプロデューサー", "仮想エージェント", "注文ガイド", "変換マップ"],
    answer: 1,
    explanation: "仮想エージェントは、チャット型インターフェイス内で情報を取得し、意思決定を下し、一般的な作業タスクを実施するユーザーを支援するための会話型プラットフォームです。"
  },
  {
    id: 23,
    no: "22",
    type: "single",
    question: "Service Catalogのアイテム要求の出力に関するテーブルとプレフィックスの組み合わせとして正しいものはどれですか？",
    choices: [
      "REQ# = Request [sc_request]、RITM# = Requested Item [sc_req_item]、SCTASK# = Catalog Task [sc_task]",
      "REQ# = Catalog Task、RITM# = Request、SCTASK# = Requested Item",
      "REQ# = Requested Item、RITM# = Catalog Task、SCTASK# = Request",
      "REQ# = Incident、RITM# = Problem、SCTASK# = Change"
    ],
    answer: 0,
    explanation: "Service Catalogのアイテム要求の出力は、REQ# = Request [sc_request]、RITM# = Requested Item [sc_req_item]、SCTASK# = Catalog Task [sc_task] という関係になっています。"
  },
  {
    id: 24,
    no: "23",
    type: "single",
    question: "必要なアイテムをまとめて注文しやすくし、アイテムの関係性をユーザーにわかりやすく示す仕組みはどれですか？",
    choices: ["注文ガイド", "レコードプロデューサー", "変数セット", "コアレスフィールド"],
    answer: 0,
    explanation: "注文ガイドを定義すると、必要なアイテムをまとめて注文しやすくなり、アイテムの関係性をユーザーにわかりやすく示すことができます。"
  },
  {
    id: 25,
    no: "24",
    type: "single",
    question: "「シンプルなフォーム」として利用でき、ユーザーが入力した情報がタスクベースのレコードに変換されてデータベースに追加・更新される機能はどれですか？",
    choices: ["レコードプロデューサー", "変換マップ", "データベースビュー", "スキーママップ"],
    answer: 0,
    explanation: "レコードプロデューサーは「シンプルなフォーム」として利用できるもので、ユーザーが入力した情報はタスクベースのレコードに変換されてデータベースに追加、または更新されます。レコードプロデューサーはカタログアイテムの一種です。"
  },
  {
    id: 26,
    no: "25,26",
    type: "single",
    question: "Service Catalogの変数タイプのうち、「別のテーブルのレコードを指定し、参照フィールドに似ている」ものはどれですか？",
    choices: ["Multiple choice", "Select box", "Reference", "Check box"],
    answer: 2,
    explanation: "Reference（参照）は、別のテーブルのレコードを指定する変数タイプで、参照フィールドに似ています。Multiple choiceはラジオボタン、Select boxは選択リスト、Check boxはオンオフ可能なチェックボックスを作成します。"
  },
  {
    id: 27,
    no: "27",
    type: "single",
    question: "カタログアイテム間で共有できる変数の集まりのことを何と呼びますか？",
    choices: ["注文ガイド", "変数セット", "コアレスフィールド", "データピル"],
    answer: 1,
    explanation: "変数セットは、カタログアイテム間で共有できる変数の集まりです。"
  },
  {
    id: 28,
    no: "27",
    type: "single",
    question: "Service Catalogの主要コンポーネントである「アイテム」に含まれないものはどれですか？",
    choices: ["ハードウェア", "ソフトウェア", "サービス", "CIクラス"],
    answer: 3,
    explanation: "アイテムは、ハードウェア・ソフトウェア・サービスといったService Catalogの構成要素です。アイテムを選択して送信すると、要求やインシデントなどのその他のレコードが生成されます。CIクラスはCMDBの概念です。"
  },
  {
    id: 29,
    no: "28",
    type: "single",
    question: "ナレッジベースへのコンテンツ追加方法として、PDFに記載されているものはどれですか？",
    choices: ["Wordドキュメントのインポート", "PowerPointのインポート", "CSVファイルのインポートのみ", "手動タイピングのみ"],
    answer: 0,
    explanation: "ナレッジベースへの記事追加方法の一つとして、Wordドキュメントのインポートが挙げられています。"
  },
  {
    id: 30,
    no: "29",
    type: "single",
    question: "承認不要でドラフト記事をすぐに公開するナレッジベースのワークフローはどれですか？",
    choices: [
      "Knowledge – Approval Publish",
      "Knowledge - Instant Publish",
      "Knowledge – Approval Retire",
      "Knowledge – Publish Knowledge"
    ],
    answer: 1,
    explanation: "Knowledge - Instant Publishは、承認不要でドラフト記事をすぐに公開します。Approval Publishはマネージャーの承認を必要とし、拒否されるとワークフローはキャンセルされ記事はドラフトのままになります。"
  },
  {
    id: 31,
    no: "29",
    type: "scenario",
    question: "シナリオ：ナレッジベースのマネージャーが記事の公開申請を拒否しました。「Knowledge – Approval Publish」ワークフローを使用していた場合、この記事のステータスはどうなりますか？",
    choices: [
      "自動的に廃止ステータスになる",
      "ワークフローがキャンセルされ、ドラフトステータスのままになる",
      "自動的に公開済みステータスになる",
      "エラーが発生し記事が削除される"
    ],
    answer: 1,
    explanation: "Knowledge – Approval Publishでは、マネージャーが要求を拒否するとワークフローはキャンセルされ、記事はドラフトステータスのままになります。"
  },
  {
    id: 32,
    no: "30,31",
    type: "single",
    question: "ナレッジのセキュリティと可視性のユーザー基準のうち、「ナレッジベースの記事を閲覧、作成、変更できるユーザー」を表すものはどれですか？",
    choices: ["canRead", "cantRead", "canContribute", "cantContribute"],
    answer: 2,
    explanation: "canContributeは、ナレッジベースの記事を閲覧、作成、変更できるユーザーを表します。canReadはすべての記事を閲覧できるユーザー、cantReadは閲覧・作成・変更できないユーザー、cantContributeは作成・変更できないユーザーです。この基準はナレッジベースレベルで適用され、記事レベルでも適用可能です。"
  },
  {
    id: 33,
    no: "32",
    type: "single",
    question: "ナレッジベースのアーキテクチャに関する記述として正しいものはどれですか？",
    choices: [
      "1つの記事は複数のナレッジベースに関連付けることができる",
      "1つの記事は、1つのナレッジベースにしか関連付けることができない",
      "記事はカテゴリに関連付けることができない",
      "ナレッジベースは1つしか作成できない"
    ],
    answer: 1,
    explanation: "1つの記事は、1つのナレッジベースにしか関連付けることはできません。ナレッジのホームページには、記事がナレッジベース別、カテゴリ別に整理されて表示されます。"
  },
  {
    id: 34,
    no: "33",
    type: "single",
    question: "機械学習によるコンテンツ、従業員コミュニティ、コンテンツキャンペーン、すべての仮想エージェント機能を備え、追加ライセンスが必要なポータルはどれですか？",
    choices: ["Employee Center Pro (/esc)", "Service Portal (/sp)", "Knowledge Portal (/kb)", "CAB Workbench (/cab)"],
    answer: 0,
    explanation: "Employee Center Pro (/esc) は、ベースラインのEmployee Centerポータルの機能を拡張したもので、機械学習によるコンテンツ、従業員コミュニティ、コンテンツキャンペーン、すべての仮想エージェント機能が備わっています。HRSD Pro、HRSD Enterprise、または個別ライセンスで利用できます。"
  },
  {
    id: 35,
    no: "34",
    type: "single",
    question: "CAB（Change Advisory Board）マネージャーがCAB会議のスケジュール設定、計画、管理を行うベースラインのポータルはどれですか？",
    choices: ["Employee Center (/esc)", "Change Advisory Board (CAB) Workbench (/cab)", "Community (/community)", "Customer Service (/csp)"],
    answer: 1,
    explanation: "CAB Workbench (/cab) では、CABマネージャーがCAB会議のスケジュール設定、計画、管理を行えます。CAB会議は通常、変更要求の確認・承認や、最近実行された変更の確認を目的としています。"
  },
  {
    id: 36,
    no: "34",
    type: "single",
    question: "ナレッジベースや記事の表示、情報の検索、検索結果のソート・フィルタリング、フィードバックの提供を行える、Knowledge Management: Service Portal プラグインの有効化が必要なポータルはどれですか？",
    choices: ["Knowledge Portal (/kb)", "Security Center", "Employee Center (/esc)", "Customer Support (/csm)"],
    answer: 0,
    explanation: "Knowledge Portal (/kb) では、ナレッジベースや記事の表示、情報の検索、検索結果のソートとフィルタリング、フィードバックの提供が行えます。Knowledge Management : Service Portal プラグイン(com.snc.knowledge_serviceportal)を有効化する必要があります。"
  },
  {
    id: 37,
    no: "35",
    type: "single",
    question: "共通サービスデータモデル（CSDM）の略称「DM」が意味するものはどれですか？",
    choices: ["Database Management", "Data Model（データモデル）", "Discovery Module", "Data Migration"],
    answer: 1,
    explanation: "CSDM（共通サービスデータモデル）における「DM」は Data Model（データモデル）を意味します。"
  },
  {
    id: 38,
    no: "36",
    type: "single",
    question: "CMDBクラス階層、CIテーブル定義、クラスCIなどを一元的に確認できる機能はどれですか？",
    choices: ["CIクラスマネージャー", "スキーママップ", "変換マップ", "リストコレクター"],
    answer: 0,
    explanation: "CIクラスマネージャーでは、CMDBクラス階層、CIテーブル定義、クラスCIなどを一元的に確認できます。"
  },
  {
    id: 39,
    no: "37",
    type: "single",
    question: "構成アイテム間の関係を視覚化するインタラクティブなグラフィカルインターフェイスを提供する機能はどれですか？",
    choices: ["Dependency Views（依存関係ビュー）", "データベースビュー", "スキーママップ", "Form Builder"],
    answer: 0,
    explanation: "Dependency Views（依存関係ビュー）は、構成アイテム間の関係を視覚化するインタラクティブなグラフィカルインターフェイスを提供します。"
  },
  {
    id: 40,
    no: "38",
    type: "single",
    question: "CMDBと構成アイテムに関連する主要なテーブルの組み合わせとして正しいものはどれですか？",
    choices: [
      "cmdb, cmdb_ci, cmdb_rel_ci",
      "sys_user, sys_user_group, sys_user_role",
      "sc_request, sc_req_item, sc_task",
      "sys_collections, sys_m2m, sys_property"
    ],
    answer: 0,
    explanation: "CMDBと構成アイテムに関連する主要テーブルは cmdb、cmdb_ci、cmdb_rel_ci です。"
  },
  {
    id: 41,
    no: "39",
    type: "scenario",
    question: "シナリオ：インポート時にターゲットテーブルとインポート（ステージング）テーブルの間で「社員番号」と「メールアドレス」の両方の値が一致した場合のみ既存レコードを更新したいとします。この要件に合う結合方式はどれですか？",
    choices: ["単一フィールド結合", "複数フィールド結合", "条件付き結合", "自動マッピングユーティリティ"],
    answer: 1,
    explanation: "複数フィールド結合は、複数のフィールドで結合を行い既存のレコードを更新できます。ターゲットテーブルレコードが持つすべての結合フィールドの値がインポートテーブルのレコードと一致する場合にのみ更新されます。"
  },
  {
    id: 42,
    no: "39",
    type: "single",
    question: "スクリプトを使用して、インポート（ステージング）テーブルの行をターゲットレコードに結合する必要があるかどうかを決定する結合方式はどれですか？",
    choices: ["単一フィールド結合", "複数フィールド結合", "条件付き結合", "自動結合"],
    answer: 2,
    explanation: "条件付き結合は、スクリプトを使用してインポート（ステージング）テーブルの行をターゲットレコードに結合する必要があるかどうかを決定します。スクリプトはsys_idフィールドのフィールドマップの[Source script]フィールドで定義し、ターゲットテーブルレコードのsys_idを返す必要があります。"
  },
  {
    id: 43,
    no: "41",
    type: "single",
    question: "インポートセットのすべてのフィールド名がターゲットテーブルのフィールド名と一致する場合に使用する、最も簡単なマッピング方法はどれですか？",
    choices: ["マッピング支援ユーティリティ", "自動マッピングユーティリティ（Auto Map Matching Fields）", "条件付き結合", "コアレスフィールド"],
    answer: 1,
    explanation: "自動マッピングユーティリティは、インポートセットのすべてのフィールド名がターゲットテーブルのフィールド名と一致する場合に使用する最も簡単な方法で、[Table Transform Maps]フォームの関連リンクにある[Auto Map Matching Fields]をクリックして一致を確認します。"
  },
  {
    id: 44,
    no: "42",
    type: "single",
    question: "ServiceNowにデータを取り込む仕組みで、データをインポートセットテーブルに格納するものはどれですか？",
    choices: ["インポートセット", "変換マップ", "データベースビュー", "スキーママップ"],
    answer: 0,
    explanation: "インポートセットは、ServiceNowにデータを取り込む仕組みを提供し、インポートセットテーブルにデータを格納します。admin または import_admin ロールを使用してログインしたユーザーは、インポートセットのあらゆる側面を管理できます。"
  },
  {
    id: 45,
    no: "42",
    type: "single",
    question: "インポートセット（ステージング）テーブルから「ターゲット」テーブルにデータを移動するための指針となる、フィールド間の関係性を決める一連のフィールドマップのことを何と呼びますか？",
    choices: ["変換マップ", "データソース", "注文ガイド", "アクセス制御リスト"],
    answer: 0,
    explanation: "変換マップは、インポートセット内のフィールドと既存のServiceNowテーブル内のフィールド間の関係性を決める一連のフィールドマップです。管理者はTransform Mapモジュールを使用して、インポートされたデータの格納先を定義します。"
  },
  {
    id: 46,
    no: "43",
    type: "single",
    question: "テーブルアクセス制御（ACL）の評価順序として正しいものはどれですか？",
    choices: [
      "最も一般的なルールから最も具体的なルールへ",
      "最も具体的なルールから最も一般的なルールへ",
      "作成日時が新しい順",
      "アルファベット順"
    ],
    answer: 1,
    explanation: "オブジェクトをテーブルのACLルールやフィールドのACLルールで照合する際は、最も具体的なルールから最も一般的なルールへと順に評価されます。"
  },
  {
    id: 47,
    no: "44",
    type: "single",
    question: "アクセス制御の定義における「権限の要件」に含まれないものはどれですか？",
    choices: [
      "有効な操作（CRUD）",
      "制限対象オブジェクト（テーブル、テーブルとフィールドなど）",
      "オブジェクトにアクセスするために必要な権限",
      "サーバーのリージョン"
    ],
    answer: 3,
    explanation: "アクセス制御の定義における権限の要件は、有効な操作（システムで実行できるCRUDアクション）、制限対象オブジェクト（テーブル、テーブルとフィールドなど）、オブジェクトにアクセスするために必要な権限、から構成されます。サーバーのリージョンは含まれません。"
  },
  {
    id: 48,
    no: "45",
    type: "single",
    question: "カスタムテーブルを作成すると、システムによってデフォルトで作成されるアクセス制御ルールの数はいくつですか？",
    choices: ["2つ（読み取り、書き込み）", "3つ（作成、読み取り、書き込み）", "4つ（作成、削除、読み取り、書き込み）", "6つ"],
    answer: 2,
    explanation: "カスタムテーブルを作成すると、4つのアクセス制御ルール（作成、削除、読み取り、書き込み）がシステムによってデフォルトで作成されます。システムで作成されたアクセス制御を確認するには、フィルターナビゲーターに「.CONFIG」と入力します。"
  },
  {
    id: 49,
    no: "46,73",
    type: "scenario",
    question: "シナリオ：adminロールを持つユーザーが、security_adminロールを持つユーザーになりすまし（代理操作）で、High Security Settingsのようなセキュリティレベルの高い機能にアクセスしようとしました。この操作は可能ですか？",
    choices: [
      "可能。adminロールがあればどんな代理操作中でも権限を昇格できる",
      "不可能。adminロールを持つユーザーであっても、security_adminロールを代理操作し、代理操作中に権限を昇格させてセキュリティレベルの高い機能にアクセスすることはできない",
      "可能。ただし事前にシステム管理者の承認が必要",
      "不可能。adminロール自体を持つことができない"
    ],
    answer: 1,
    explanation: "admin ロールを持つユーザーであっても security_admin ロール（昇格した特権ロール）を代理操作し、代理操作中に権限を昇格させてセキュリティレベルの高い機能にアクセスすることはできません。"
  },
  {
    id: 50,
    no: "47",
    type: "single",
    question: "アクセス制御には主に2つのレベルがありますが、その組み合わせとして正しいものはどれですか？",
    choices: ["列レベルと行レベル", "テーブルレベルとアプリケーションレベル", "ユーザーレベルとグループレベル", "本番レベルと開発レベル"],
    answer: 0,
    explanation: "アクセス制御には、列レベルと行レベルがあります。"
  },
  {
    id: 51,
    no: "48",
    type: "single",
    question: "ベースシステムの管理者がHigh Security Settingsの機能にアクセスするために行う操作の名称はどれですか？",
    choices: ["Elevate role（ロールの昇格）", "Impersonate user（ユーザーの代理操作）", "Update Set Commit（更新セットのコミット）", "Form Builder"],
    answer: 0,
    explanation: "ベースシステムの管理者は、ユーザーメニューから[Elevate role]を選択し、昇格したロールを選択して[Update]をクリックすることで、特権ロールに昇格しHigh Security Settingsの機能にアクセスできるようになります。"
  },
  {
    id: 52,
    no: "51",
    type: "single",
    question: "アプリケーションの一部であることを示す名前空間識別子として、カスタムテーブル名に付くプレフィックスはどれですか？",
    choices: ["u_", "x_", "sys_", "cmdb_"],
    answer: 1,
    explanation: "アプリケーションの一部であることを示す名前空間識別子「x_」がプレフィックスとして名前に付きます。それ以外のグローバルアプリケーションのカスタムテーブルには「u_」というプレフィックスが付きます。"
  },
  {
    id: 53,
    no: "51",
    type: "single",
    question: "「u_」というプレフィックスが付くテーブルはどのようなテーブルですか？",
    choices: [
      "ベースシステムに存在するコアテーブル",
      "名前空間を持たないグローバルアプリケーションのカスタムテーブル",
      "CMDBの構成アイテムテーブル",
      "システムディクショナリのテーブル"
    ],
    answer: 1,
    explanation: "「u_」というプレフィックスは、名前空間識別子「x_」を持たないグローバルアプリケーションのカスタムテーブルに付きます。管理者や開発者によって作成されたテーブルはカスタムテーブルと呼ばれます。"
  },
  {
    id: 54,
    no: "52",
    type: "single",
    question: "Incidentテーブルの [Watchlist] フィールドのように、あるテーブルの複数のレコードを選択できる1対多のフィールドタイプはどれですか？",
    choices: ["参照フィールド", "Glideリスト", "ドキュメントIDフィールド", "コアレスフィールド"],
    answer: 1,
    explanation: "Glideリストは、ユーザーがGlideリストによって定義されたテーブルの複数のレコードを選択できるフィールドです。例としてIncidentテーブルのWatchlistフィールドでUserテーブルのレコードを1つ以上選択できます。"
  },
  {
    id: 55,
    no: "52",
    type: "single",
    question: "ユーザーがインスタンス内のいずれかのテーブルのレコードを選択できるフィールドタイプはどれですか（例：Translated Textテーブルの[Document]フィールド）。",
    choices: ["参照フィールド", "Glideリスト", "ドキュメントIDフィールド", "多対多"],
    answer: 2,
    explanation: "ドキュメントIDフィールドは、ユーザーがインスタンス内のいずれかのテーブルのレコードを選択できるフィールドです。例としてTranslated Textテーブルの[Document]フィールドがあります。"
  },
  {
    id: 56,
    no: "52",
    type: "scenario",
    question: "シナリオ：受講者は複数のクラスに登録でき、1つのクラスには複数の受講者が含まれるような関係を実装したいと考えています。ServiceNowでこの多対多の関係を実現する際に役立つテーブルの組み合わせはどれですか？",
    choices: [
      "sys_collections.list と sys_m2m.list",
      "cmdb_ci と cmdb_rel_ci",
      "sc_request と sc_req_item",
      "sys_user_role と sys_user_grmember"
    ],
    answer: 0,
    explanation: "多対多の関係は、複数のテーブルを双方向の関係性で関連付けるものです。受講者とクラスの関係が一般的な例で、ServiceNowで多対多の関係を使用する場合はsys_collections.listとsys_m2m.listが役に立ちます。"
  },
  {
    id: 57,
    no: "52",
    type: "single",
    question: "レポートのためにテーブルの結合を定義し、作成した仮想テーブルのデータが読み取り専用となる機能はどれですか？",
    choices: ["データベースビュー", "変換マップ", "スキーママップ", "拡張テーブル"],
    answer: 0,
    explanation: "データベースビューでは、レポートのためにテーブルの結合を定義します。データベースビューで作成した仮想テーブルのデータは読み取り専用です。作成するには[System Definition] > [Database Views]に移動します。"
  },
  {
    id: 58,
    no: "52",
    type: "single",
    question: "拡張されたテーブルに含まれる内容として正しいものはどれですか？",
    choices: [
      "そのテーブルに固有のフィールドのみ",
      "そのテーブルに固有のフィールド以外に、親テーブルのすべてのフィールドとそのプロパティ",
      "親テーブルのフィールドは一切含まれない",
      "ACLルールのみ"
    ],
    answer: 1,
    explanation: "拡張されたテーブルには、そのテーブルに固有のフィールド以外に、親テーブルのすべてのフィールドとそのプロパティが含まれています。"
  },
  {
    id: 59,
    no: "53,54",
    type: "single",
    question: "参照フィールドおよびレコードの識別子について正しい説明はどれですか？",
    choices: [
      "参照フィールドには別テーブルのレコード名がそのまま格納され、レコードは16文字のIDで識別される",
      "参照フィールドには別のテーブルにあるレコードの一意のシステムID（sys_id）が格納され、レコードはグローバルに一意な32文字のIDで識別される",
      "参照フィールドにはレコードのタイムスタンプが格納される",
      "レコードの識別子はユーザーが自由に設定できる"
    ],
    answer: 1,
    explanation: "参照フィールドには、別のテーブルにあるレコードの一意のシステムID（sys_id）が格納されます。レコードは、グローバルに一意なsys_idと呼ばれる32文字のIDで識別されます。"
  },
  {
    id: 60,
    no: "55",
    type: "single",
    question: "データベースに含まれるすべてのテーブルおよびフィールドの定義が含まれているものはどれですか？",
    choices: ["システムディクショナリ", "変換マップ", "スキーママップ", "ACLリスト"],
    answer: 0,
    explanation: "システムディクショナリには、データベースに含まれるすべてのテーブルおよびフィールドの定義が含まれています。アクセスするには[All] > [System Definition] > [Dictionary]に移動します。"
  },
  {
    id: 61,
    no: "56",
    type: "single",
    question: "レコードのフィールドではない情報を表示するために使用されるフォーム要素はどれですか？",
    choices: ["フォーマッター", "UIアクション", "関連リスト", "変数セット"],
    answer: 0,
    explanation: "フォーマッターは、レコードのフィールドではない情報を表示するために使用される要素です（例：Activity Stream）。"
  },
  {
    id: 62,
    no: "57,58",
    type: "single",
    question: "フォームにフィールドを追加・構成し、ビューの選択、ポリシーやルールの適用、カスタマイズのプレビューを実行できる新しいアプリケーションはどれですか？",
    choices: ["Form Builder", "Workflow Studio", "Visualization Designer", "CIクラスマネージャー"],
    answer: 0,
    explanation: "フォームビルダー（Form Builder）は、管理者がフォーム要素（フィールド、フォーマッター、埋め込みリスト）の追加と構成、レイアウト適用先のビューの選択、ポリシーやルールの適用、カスタマイズのプレビューを実行できるアプリケーションです。"
  },
  {
    id: 63,
    no: "58",
    type: "single",
    question: "Form Builder で確認・編集できる項目に含まれないものはどれですか？",
    choices: ["UI Policies", "Access control rules", "Client Scripts", "CMDBの依存関係ビュー"],
    answer: 3,
    explanation: "Form Builderでは、UI Policies、Access control rules（ACLルール）、Client Scripts、Business Rules、Workspace view rulesを確認・編集できます。CMDBの依存関係ビューはForm Builderの機能ではありません。"
  },
  {
    id: 64,
    no: "59",
    type: "single",
    question: "クラシックフォームにおいて、フォーム内の複数のフィールドを論理グループごとにまとめて表示する要素はどれですか？",
    choices: ["セクション", "フォーマッター", "UIアクション", "関連リスト"],
    answer: 0,
    explanation: "セクションには、フォーム内の複数のフィールドが論理グループごとにまとめて表示されます。"
  },
  {
    id: 65,
    no: "60",
    type: "single",
    question: "フォームやリスト上のボタン、リンク、コンテキストメニューの項目などで、UIをさらにインタラクティブにカスタマイズする要素はどれですか？",
    choices: ["UIアクション", "フォーマッター", "関連リスト", "セクション"],
    answer: 0,
    explanation: "UIアクションは、フォームやリスト上のボタン、リンク、コンテキストメニューの項目などです。これらの要素によりUIがさらにインタラクティブになるようにカスタマイズされます。"
  },
  {
    id: 66,
    no: "60",
    type: "single",
    question: "現在のレコードと関係があるテーブル内のレコードが表示され、レコードがデータベースに保存されるまでフォームに表示されない要素はどれですか？",
    choices: ["関連リスト", "セクション", "フォーマッター", "変数セット"],
    answer: 0,
    explanation: "関連リストには、現在のレコードと関係があるテーブル内のレコードが表示されます（例：ユーザーフォームの[Roles]関連リスト）。レコードがデータベースに保存されるまで、関連リストはフォームに表示されません。"
  },
  {
    id: 67,
    no: "61",
    type: "single",
    question: "リストフィルター（コアプラットフォーム）を構成する3つの要素の組み合わせとして正しいものはどれですか？",
    choices: ["フィールド、演算子、値", "テーブル、レコード、フィールド", "アクション、条件、結果", "ロール、グループ、権限"],
    answer: 0,
    explanation: "リストフィルターは「フィールド」「演算子」「値」の3要素で構成されます。"
  },
  {
    id: 68,
    no: "62",
    type: "single",
    question: "リストコレクターを使用して既存のフィールドを追加する際、関連テーブルのフィールドにアクセスするために使用する記法はどれですか？",
    choices: ["ドット連結（ドットウォーキング）", "正規表現", "SQL JOIN構文", "XMLタグ"],
    answer: 0,
    explanation: "関連テーブルのフィールドにアクセスするには、ドット連結（ドットウォーキング）を使用します。"
  },
  {
    id: 69,
    no: "65",
    type: "scenario",
    question: "シナリオ：会議室予約アプリケーションをアプリケーションスコープで作成しました。他のアプリケーションがこのアプリケーションのテーブルやビジネスロジックにアクセスするためには何が必要ですか？",
    choices: [
      "特に何もしなくても自動的にすべてのアプリケーションからアクセス可能になる",
      "管理者が明示的にアクセス権限を指定する必要がある",
      "アプリケーションを削除して再作成する必要がある",
      "更新セットをコミットするだけで自動的にアクセス可能になる"
    ],
    answer: 1,
    explanation: "アプリケーションスコープでは、アプリケーションファイルとデータに対するアクセスを識別して制限することでアプリケーションを保護します。デフォルトでは自アプリケーションのテーブル・ビジネスロジックにのみアクセスでき、他のアプリケーションは明示的な権限がなければアクセス・変更できません。"
  },
  {
    id: 70,
    no: "66",
    type: "single",
    question: "管理者がServiceNowインスタンスで実行することの大半を占め、主にコードを記述せずに行われるものはどれですか？",
    choices: ["設定（コンフィギュレーション）", "カスタマイズ", "スクリプティング", "ハードコーディング"],
    answer: 0,
    explanation: "管理者がServiceNowインスタンスで実行することの大半は「設定」です。設定は主にコードを記述せずに行われます。一方カスタマイズは、プラットフォームに存在しない追加機能が必要なときや機能を追加したいときに実行します。"
  },
  {
    id: 71,
    no: "67",
    type: "single",
    question: "ServiceNowのアーキテクチャの説明として正しいものはどれですか？",
    choices: [
      "全顧客が単一のデータベースを共有するマルチテナントアーキテクチャ",
      "各インスタンスがデータ、アプリケーション、カスタマイズを含む個々に分離したデータベースを備える、マルチインスタンス・シングルテナントアーキテクチャ",
      "オンプレミスでのみ提供されるアーキテクチャ",
      "インスタンスごとにアップグレードは実行できない"
    ],
    answer: 1,
    explanation: "ServiceNowは、マルチインスタンス、シングルテナントの高度なアーキテクチャを顧客向けのデフォルト製品として利用しています。各インスタンスはデータ、アプリケーション、カスタマイズを含む個々に分離したデータベースを備え、他の顧客とは共有されません。"
  },
  {
    id: 72,
    no: "67",
    type: "single",
    question: "ServiceNowのマルチインスタンス・シングルテナントアーキテクチャの利点として誤っているものはどれですか？",
    choices: [
      "自社のデータが同じデータベース内で他組織のデータと混ざることはない",
      "購入したい製品を選択でき、製品スイート全体の費用を負担する必要がない",
      "非本番インスタンスをアップグレードしてテストしてから本番をアップグレードできる",
      "全顧客のデータが1つのデータベースに統合されるため検索が高速になる"
    ],
    answer: 3,
    explanation: "各インスタンスは個々に分離したデータベースを備え、他のServiceNow顧客とは共有されません（シングルテナント）。全顧客データが1つのデータベースに統合されるという記述は誤りです。"
  },
  {
    id: 73,
    no: "68",
    type: "single",
    question: "IT Service Managementワークフローのインシデント、要求、ウォークアップなどのタスクレコードのライフサイクル管理に使用される、統一されたエクスペリエンスを提供するワークスペースはどれですか？",
    choices: ["ServiceNow Service Operations Workspace", "Employee Center", "Security Center", "CAB Workbench"],
    answer: 0,
    explanation: "ServiceNow Service Operations Workspaceは、複数のIT Service Managementワークフローに対して統一されたエクスペリエンスを提供し、インシデント・要求・ウォークアップなどのタスクレコードのライフサイクル管理に使用されます。"
  },
  {
    id: 74,
    no: "68",
    type: "single",
    question: "社内の従業員のニーズ（人事、IT、法務など）にワンストップで対応でき、すべての顧客がデフォルトで利用できるServiceNow Storeのアプリケーションはどれですか？",
    choices: ["Employee Centerポータル", "Customer Serviceポータル", "Communityポータル", "Security Center"],
    answer: 0,
    explanation: "Employee Centerポータルでは、社内の従業員のニーズ（人事、IT、法務など）にワンストップで対応できます。これはすべての顧客がデフォルトで利用できるServiceNow Storeのアプリケーションです。Employee Center Proでは標準機能が拡張されており、追加ライセンスが必要です。"
  },
  {
    id: 75,
    no: "70",
    type: "single",
    question: "他ユーザーの代理操作（インパーソネーション）のログ記録を有効にするために追加・trueに設定するsys_propertyはどれですか？",
    choices: [
      "glide.sys.log_impersonation",
      "glide.ui.impersonate_disabled",
      "glide.security.admin_only",
      "glide.db.coalesce_enabled"
    ],
    answer: 0,
    explanation: "代理操作はシステムログに記録されます。システムログの代理操作イベントを確認するには、sys_property「glide.sys.log_impersonation」を追加して[true]に設定する必要があります。"
  },
  {
    id: 76,
    no: "70",
    type: "single",
    question: "管理者ロールまたは代理操作者ロールを持つユーザーが他のユーザーで代理操作する主な目的として想定されているものはどれですか？",
    choices: ["本番データの削除", "テストのために他のユーザーの視点で動作を確認すること", "他ユーザーのパスワードを変更すること", "他ユーザーのメールを送信すること"],
    answer: 1,
    explanation: "システム管理者として、テストのために他のユーザーで代理操作する方法を知っておく必要があります。管理者ロールまたは代理操作者ロールを持つユーザーは、他のユーザーで代理操作できます。"
  },
  {
    id: 77,
    no: "71",
    type: "single",
    question: "ロールの管理方法として推奨されるものはどれですか？",
    choices: [
      "ロールを個人ユーザーに直接追加する",
      "ユーザーをグループに追加してロールをグループにアサインする",
      "ロールはシステム管理者のみが保持し他には付与しない",
      "ロールはテーブルのフィールドとして直接保存する"
    ],
    answer: 1,
    explanation: "ロールを個人ユーザーに追加するのではなく、ユーザーをグループに追加してロールをグループにアサインすることが推奨されます。このロールのアサイン方法によって、組織内の別のロールに移行するときのメンテナンスが簡単になります。ロールはRole [sys_user_role]テーブルのレコードで表されます。"
  },
  {
    id: 78,
    no: "72",
    type: "single",
    question: "ユーザーとグループの情報を管理する主要テーブルの組み合わせとして正しいものはどれですか？",
    choices: [
      "User [sys_user] と sys_user_group",
      "cmdb_ci と cmdb_rel_ci",
      "sc_request と sc_req_item",
      "sys_collections と sys_m2m"
    ],
    answer: 0,
    explanation: "ユーザーはUser [sys_user] テーブル、グループはsys_user_groupテーブルで管理されます。[All] > [User Administration] > [Users] および [Groups] からアクセスします。"
  },
  {
    id: 79,
    no: "74",
    type: "single",
    question: "ServiceNowプラットフォームが分類される「aPaaS」とは何の略ですか？",
    choices: [
      "Application Platform as a Service",
      "Automated Process as a Solution",
      "Application Protocol as a Standard",
      "Advanced Platform as a Server"
    ],
    answer: 0,
    explanation: "このプラットフォームはaPaaS（Application Platform as a Service）に分類されます。必要に応じてアプリケーション間でデータを共有しながら、アプリケーションの開発、インストール、修正を実行できるプラットフォームです。"
  },
  {
    id: 80,
    no: "35,38",
    type: "scenario",
    question: "シナリオ：新入社員に対して、CSDM（共通サービスデータモデル）とCMDBの構成アイテムの関係を説明することになりました。次のうち最も適切な説明はどれですか？",
    choices: [
      "CSDMはデータモデル（Data Model）の考え方であり、CMDBはcmdb・cmdb_ci・cmdb_rel_ciなどのテーブルで構成アイテムとその関係を管理する仕組みである",
      "CSDMとCMDBは全く同じ機能であり呼び方が異なるだけである",
      "CMDBはCSDMを実行するためのスクリプト言語である",
      "CSDMはナレッジベースの一種であり、CMDBとは無関係である"
    ],
    answer: 0,
    explanation: "CSDM（共通サービスデータモデル）における「DM」はData Model（データモデル）を意味します。一方CMDBは、cmdb、cmdb_ci、cmdb_rel_ciなどのテーブルを用いて構成アイテムとその関係性を管理する仕組みです。"
  },
  {
    id: 81,
    no: "1,2",
    type: "scenario",
    question: "シナリオ：あなたは開発インスタンスで作成した更新セットを本番インスタンスへ移行しようとしています。誤って「コミット」を先に押してしまい、プレビューを確認していないことに気づきました。本来あるべき正しい作業順序はどれですか？",
    choices: [
      "取得 → プレビュー → コミット の順で、コミット前に必ずプレビューで問題（衝突など）を確認する",
      "コミット → プレビュー → 取得 の順で問題ない",
      "プレビューは省略してもよく、取得後すぐにコミットしてよい",
      "本番インスタンスでは取得作業自体が不要である"
    ],
    answer: 0,
    explanation: "更新セットの適用は「取得」→「プレビュー」→「コミット」の順で行います。プレビューでは適用前に問題（衝突など）を確認できるため、コミットの前に必ず実施すべき工程です。"
  },
  {
    id: 82,
    no: "6,9",
    type: "scenario",
    question: "シナリオ：CSVインポートでインシデントテーブルにデータを取り込む際、「Category」フィールドはスクリプトやユーザー入力によって値が上書きされないようにしたいと考えています。この要件に最も適した機能はどれですか？",
    choices: [
      "データポリシーで対象フィールドを読み取り専用に設定する",
      "クライアントスクリプトのonLoad()でアラートを表示する",
      "通知を作成してユーザーにメールで注意喚起する",
      "UIアクションでボタンを非表示にする"
    ],
    answer: 0,
    explanation: "データポリシーは、必須フィールドだけでなく読み取り専用フィールドも設定でき、インポート時またはスクリプト/ユーザーによる入力時にデータ操作がされないようにできます。さらにリストにおいても動作します。"
  },
  {
    id: 83,
    no: "16",
    type: "scenario",
    question: "シナリオ：Slackやサードパーティのクラウドサービスと連携し、あらかじめ用意された統合アクションを使ってフローを組みたいと考えています。この際に利用する仕組みはどれですか？",
    choices: [
      "Integration Hubのスポーク",
      "ナレッジベースのワークフロー",
      "リストコレクター",
      "スキーママップ"
    ],
    answer: 0,
    explanation: "Integration Hubには、一般的なサードパーティ製アプリケーションと連携するためのさまざまな統合アクションが事前に組み込まれており、これらはスポークと呼ばれます。"
  },
  {
    id: 84,
    no: "18",
    type: "scenario",
    question: "シナリオ：インシデントレコードが作成または更新されたタイミングで自動的にフローを実行したいと考えています。設定すべきトリガーの種類はどれですか？",
    choices: [
      "レコードベースのトリガー",
      "スケジュールベースのトリガー",
      "アプリケーションベースのトリガー",
      "手動トリガーのみで自動実行はできない"
    ],
    answer: 0,
    explanation: "レコードベースのトリガーは、レコードが作成または更新されるとフローを実行します。スケジュールベースのトリガーは日時や間隔、アプリケーションベースのトリガーはアプリケーション固有の条件で実行されます。"
  },
  {
    id: 85,
    no: "24",
    type: "scenario",
    question: "シナリオ：ITに詳しくない従業員でも簡単に入力でき、送信するとインシデントレコードが自動生成されるような「シンプルなフォーム」をカタログに用意したいと考えています。適した機能はどれですか？",
    choices: [
      "レコードプロデューサー",
      "変換マップ",
      "データベースビュー",
      "スキーママップ"
    ],
    answer: 0,
    explanation: "レコードプロデューサーは「シンプルなフォーム」として利用できるカタログアイテムの一種です。ユーザーが入力した情報はタスクベースのレコードに変換されてデータベースに追加・更新されます。"
  },
  {
    id: 86,
    no: "33",
    type: "scenario",
    question: "シナリオ：従業員向けポータルに機械学習によるレコメンドコンテンツ、従業員コミュニティ、コンテンツキャンペーン、仮想エージェントのフル機能を導入したいと考えています。必要な製品はどれですか？",
    choices: [
      "Employee Center Pro（追加ライセンスが必要）",
      "標準のEmployee Center（追加ライセンス不要）",
      "Knowledge Portal (/kb)",
      "CAB Workbench (/cab)"
    ],
    answer: 0,
    explanation: "Employee Center Proでは、ベースラインのEmployee Centerポータルの機能が拡張され、機械学習によるコンテンツ、従業員コミュニティ、コンテンツキャンペーン、すべての仮想エージェント機能が備わっています。HRSD Pro、HRSD Enterprise、または個別ライセンスで利用できます。"
  },
  {
    id: 87,
    no: "43",
    type: "scenario",
    question: "シナリオ：あるテーブルに対して「全ユーザーに読み取りを許可する」一般的なACLと、「特定ロールのみ読み取りを許可する」より具体的なACLの両方が存在します。ServiceNowはどちらのルールを優先して評価しますか？",
    choices: [
      "より具体的なルールを優先して評価する",
      "より一般的なルールを優先して評価する",
      "作成日時が新しい方を優先する",
      "アルファベット順で先に来る方を優先する"
    ],
    answer: 0,
    explanation: "テーブルアクセス制御の評価では、オブジェクトを最も具体的なルールから最も一般的なルールへと順に照合します。フィールドのACLルールについても同様です。"
  },
  {
    id: 88,
    no: "48,73",
    type: "scenario",
    question: "シナリオ：ベースシステムの管理者が、通常のadminロールでは操作できないHigh Security Settingsの機能を使いたいと考えています。取るべき正しい操作はどれですか？",
    choices: [
      "ユーザーメニューから[Elevate role]を選択し、特権ロールに昇格する",
      "他のユーザーになりすまして代理操作すればよい",
      "システムプロパティを直接データベースから書き換える",
      "何も操作しなくても自動的にアクセスできる"
    ],
    answer: 0,
    explanation: "ベースシステムの管理者は、ユーザーメニューを開き[Elevate role]を選択、昇格したロールを選んで[Update]をクリックすることで特権ロールに昇格し、High Security Settingsの機能にアクセスできるようになります。"
  },
  {
    id: 89,
    no: "52",
    type: "scenario",
    question: "シナリオ：Translated Textテーブルのように、レコードがインスタンス内のどのテーブルのレコードでも参照できるようにしたいと考えています。使用すべきフィールドタイプはどれですか？",
    choices: [
      "ドキュメントIDフィールド",
      "参照フィールド",
      "Glideリスト",
      "多対多のみで実現する"
    ],
    answer: 0,
    explanation: "ドキュメントIDフィールドは、ユーザーがインスタンス内のいずれかのテーブルのレコードを選択できるフィールドです。例としてTranslated Textテーブルの[Document]フィールドがあります。"
  },
  {
    id: 90,
    no: "57,58",
    type: "scenario",
    question: "シナリオ：新しいフィールドをフォームに追加し、同じ画面でそのフィールドに対するUIポリシーやACLルールも確認・設定したいと考えています。最も効率的な機能はどれですか？",
    choices: [
      "Form Builder",
      "スキーママップ",
      "CIクラスマネージャー",
      "変換マップ"
    ],
    answer: 0,
    explanation: "フォームビルダー（Form Builder）は、フォーム要素の追加・構成に加え、UI Policies、Access control rules（ACL）、Client Scripts、Business Rules、Workspace view rulesの確認・編集も同じ画面から行えるアプリケーションです。"
  },
  {
    id: 91,
    no: "65",
    type: "scenario",
    question: "シナリオ：会議室予約アプリケーション（アプリケーションスコープあり）が使用しているテーブルに、別の人事管理アプリケーションから直接アクセスしようとしたところアクセスできませんでした。この理由として正しいものはどれですか？",
    choices: [
      "アプリケーションスコープにより、他のアプリケーションは明示的な権限がない限りテーブルやビジネスロジックにアクセス・変更できないため",
      "会議室予約アプリケーションが削除されているため",
      "人事管理アプリケーションのライセンスが切れているため",
      "ACLルールが存在しないテーブルはすべてアクセス不可になる仕様のため"
    ],
    answer: 0,
    explanation: "アプリケーションスコープでは、アプリケーションファイルとデータに対するアクセスを識別・制限してアプリケーションを保護します。デフォルトでは自アプリケーションのテーブル・ビジネスロジックにのみアクセスでき、他のアプリケーションは明示的な権限がなければアクセスできません。"
  },
  {
    id: 92,
    no: "70",
    type: "scenario",
    question: "シナリオ：テストのために他のユーザーへ代理操作（インパーソネーション）を行った履歴を、システムログに記録して後から監査したいと考えています。どの設定を行う必要がありますか？",
    choices: [
      "sys_property「glide.sys.log_impersonation」を追加し[true]に設定する",
      "対象ユーザーのパスワードを変更する",
      "adminロールを一時的に削除する",
      "更新セットをコミットする"
    ],
    answer: 0,
    explanation: "代理操作はシステムログに記録されます。システムログの代理操作イベントを確認するには、sys_property「glide.sys.log_impersonation」を追加して[true]に設定する必要があります。"
  },
  {
    id: 93,
    no: "74",
    type: "scenario",
    question: "シナリオ：複数の異なるアプリケーション間で、必要に応じて同じユーザーデータやタスクデータを共有しながら開発・カスタマイズを進めたいと考えています。このような特性を持つプラットフォームの分類はどれですか？",
    choices: [
      "aPaaS（Application Platform as a Service）",
      "IaaS（Infrastructure as a Service）のみ",
      "単純な静的Webホスティング",
      "オフラインデスクトップアプリケーション"
    ],
    answer: 0,
    explanation: "このプラットフォームはaPaaS（Application Platform as a Service）に分類されます。必要に応じてアプリケーション間でデータを共有しながら、アプリケーションの開発、インストール、修正を実行できます。"
  },
  {
    id: 94,
    no: "29",
    type: "scenario",
    question: "シナリオ：公開済みのナレッジ記事を廃止する際、事前にナレッジベースのマネージャーの承認を必須にしたいと考えています。使用すべきワークフローはどれですか？",
    choices: [
      "Knowledge – Approval Retire",
      "Knowledge - Instant Retire",
      "Knowledge – Approval Publish",
      "Knowledge - Instant Publish"
    ],
    answer: 0,
    explanation: "Knowledge – Approval Retireは、記事を廃止ステータスに移す前にナレッジベースのマネージャーに承認を求めます。マネージャーが拒否するとワークフローはキャンセルされ、記事は公開済みステータスのままになります。"
  },
  {
    id: 95,
    no: "39",
    type: "scenario",
    question: "シナリオ：従業員のインポートデータについて、「社員番号」フィールドの値がターゲットテーブルの既存レコードと一致する場合のみ、そのレコードを新規追加ではなく更新したいと考えています。適した設定はどれですか？",
    choices: [
      "社員番号フィールドを結合（コアレス）フィールドとして単一フィールド結合を設定する",
      "社員番号フィールドを削除する",
      "変換マップ自体を作成しない",
      "ACLルールで社員番号フィールドを非表示にする"
    ],
    answer: 0,
    explanation: "単一フィールド結合は、単一のフィールドで結合を行い既存のレコードを更新できます。ターゲットテーブルのレコードに結合フィールドの値がインポートテーブルのレコードと同じものが存在する場合、新規追加ではなく更新されます。"
  },
  {
    id: 96,
    no: "71,72",
    type: "scenario",
    question: "シナリオ：部署異動が多い組織で、ロールの管理・引き継ぎ作業をできるだけ簡単にしたいと考えています。推奨されるロール付与の方法はどれですか？",
    choices: [
      "ユーザーをグループに追加し、そのグループにロールをアサインする",
      "すべてのユーザーに個別に同じロールを1人ずつ手動で付与する",
      "ロールは一度付与したら二度と変更しない運用にする",
      "ロールをテーブルのカスタムフィールドとして自作する"
    ],
    answer: 0,
    explanation: "ロールを個人ユーザーに追加するのではなく、ユーザーをグループに追加してロールをグループにアサインすることが推奨されます。この方法によって、組織内の別のロールへ移行するときのメンテナンスが簡単になります。"
  },
  {
    id: 97,
    no: "45",
    type: "scenario",
    question: "シナリオ：新しく作成したカスタムテーブルに、システムが自動生成したアクセス制御ルールが存在するか確認したいと考えています。どのように確認しますか？",
    choices: [
      "フィルターナビゲーターに「.CONFIG」と入力して確認する",
      "テーブルを一度削除して再作成する",
      "ACLルールは自動生成されないため確認不要",
      "システムディクショナリを削除して確認する"
    ],
    answer: 0,
    explanation: "カスタムテーブルを作成すると、4つのアクセス制御ルール（作成、削除、読み取り、書き込み）がシステムによってデフォルトで作成されます。これを確認するには、フィルターナビゲーターに「.CONFIG」と入力します。"
  },
  {
    id: 98,
    no: "67",
    type: "scenario",
    question: "シナリオ：新しいバージョンへのアップグレードを行う前に、まず検証環境で動作確認をしてから本番環境に適用したいと考えています。この運用を可能にしているServiceNowのアーキテクチャ上の特徴はどれですか？",
    choices: [
      "個別のインスタンス上でアップグレードが実行されるマルチインスタンスアーキテクチャ",
      "全顧客が同一データベースを共有するマルチテナントアーキテクチャ",
      "アップグレードは本番インスタンスにのみ適用可能な仕様",
      "検証環境は提供されていない"
    ],
    answer: 0,
    explanation: "ServiceNowは個別のインスタンス上でアップグレードが実行されるため、非本番インスタンスをアップグレードしてテストを実施してから本番インスタンスをアップグレードできます。各インスタンスはデータ・アプリケーション・カスタマイズを含む個々に分離したデータベースを備えます（マルチインスタンス・シングルテナント）。"
  },
  {
    id: 99,
    no: "50",
    type: "single",
    question: "特定のテーブルに関連する他のテーブルをグラフィカルに表示できる機能へアクセスするパスとして正しいものはどれですか？",
    choices: [
      "[All] > [System Definition] > [Tables] から [Show Schema Map] を選択する",
      "[All] > [Platform Analytics] > [Library] から選択する",
      "[All] > [Service Catalog] > [Catalog Definitions] から選択する",
      "[All] > [System Notification] > [Email] から選択する"
    ],
    answer: 0,
    explanation: "スキーママップでは、特定のテーブルに関連する他のテーブルをグラフィカルに表示できます。[All] > [System Definition] > [Tables] に移動し、[Show Schema Map] を選択します。"
  },
  {
    id: 100,
    no: "63",
    type: "single",
    question: "リストのコンテキストメニュー（コアプラットフォーム）に含まれないものはどれですか？",
    choices: [
      "リストコントロールメニュー",
      "列オプションメニュー",
      "リストフィールド（右クリック）のコンテキストメニュー",
      "スキーママップ表示メニュー"
    ],
    answer: 3,
    explanation: "リストのコンテキストメニューには、リストコントロールメニュー、列オプションメニュー、リストフィールド（右クリック）のコンテキストメニューがあります。スキーママップ表示メニューはリストのコンテキストメニューには含まれません。"
  },
  {
    id: 101,
    no: "64",
    type: "single",
    question: "特定のフィールドまたは列のみを表示させ、多様な作業アクティビティをサポートできるようにする仕組みはどれですか？",
    choices: ["ビュー（リストビュー）", "変換マップ", "スキーママップ", "データポリシー"],
    answer: 0,
    explanation: "ビューは、特定のフィールドまたは列のみを表示させるようにするもので、多様な作業アクティビティをサポートできます。"
  },
  {
    id: 102,
    no: "69",
    type: "single",
    question: "ServiceNowプラットフォームの特徴として正しいものはどれですか？",
    choices: [
      "単一のデータモデルによって、アプリケーションや部門間でのデータ共有が可能になり、他のエンタープライズシステムとも統合できる",
      "各アプリケーションは完全に独立しており、データを一切共有できない",
      "カスタムアプリケーションを構築することはできない",
      "他のエンタープライズシステムとは統合できない"
    ],
    answer: 0,
    explanation: "プラットフォームとその上で動作するアプリケーションは、単一のSoRを使用して組織のビジネスプロセスを統合します。単一のデータモデルによりアプリケーションや部門間でのデータ共有が可能になり、他のエンタープライズシステムとも統合され、幅広いプラグアンドプレイアプリケーションをサポートしています。ServiceNowではカスタムアプリケーションも構築できます。"
  },
  {
    id: 103,
    no: "75",
    type: "single",
    question: "本コースの学習シナリオに登場する架空の会社・製品の組み合わせとして正しいものはどれですか？",
    choices: [
      "Cloud Dimensions社 と Infinity Holographic Handheld Device (Infinity HHD)",
      "ServiceNow社 と Now Platform",
      "Ricoh社 と CSA試験",
      "GitHub社 と Copilot"
    ],
    answer: 0,
    explanation: "コースのシナリオでは、Cloud Dimensions（架空の企業）と、その製品であるInfinity Holographic Handheld Device（Infinity HHD）が題材として使用されています。"
  },
  {
    id: 104,
    no: "5",
    type: "single",
    question: "クライアントスクリプトのタイプのうち、「フォームがロードされると実行される」ものはどれですか？",
    choices: ["onLoad()", "onChange()", "onSubmit()", "onCellEdit()"],
    answer: 0,
    explanation: "onLoad() はフォームがロードされると実行されます。onChange() は特定フィールドの値変更時、onSubmit() はフォーム送信時、onCellEdit() はリストのセル値変更時に実行されます。"
  },
  {
    id: 105,
    no: "9",
    type: "scenario",
    question: "シナリオ：あるフィールドを「必須」に設定し、通常のフォーム入力だけでなく、一覧（リスト）からのインライン編集時にも必須チェックを効かせたいと考えています。この要件を満たせる機能はどれですか？",
    choices: [
      "データポリシー（リストでも動作する）",
      "UIポリシー（クライアントサイドのみで動作しリストには影響しない設定のみを想定）",
      "通知",
      "変換マップ"
    ],
    answer: 0,
    explanation: "データポリシーは、必須フィールドだけでなく読み取り専用フィールドも設定でき、インポート時またはスクリプト/ユーザーによる入力時にデータ操作がされないようにできます。さらにリストにおいても動作する点が特徴です。"
  },
  {
    id: 106,
    no: "22",
    type: "single",
    question: "Service Catalogのアイテム要求の出力のうち、[sc_req_item] テーブルに対応する接頭辞はどれですか？",
    choices: ["REQ#", "RITM#", "SCTASK#", "INC#"],
    answer: 1,
    explanation: "RITM# は Requested Item [sc_req_item] テーブルに対応します。REQ# は Request [sc_request]、SCTASK# は Catalog Task [sc_task] に対応します。"
  },
  {
    id: 107,
    no: "39",
    type: "scenario",
    question: "シナリオ：インポートするレコードをターゲットレコードに結合すべきかどうかを、単純な値の一致だけでなく複雑なロジックで判定したいと考えています。この場合に使用するスクリプトはどこに定義し、何を返す必要がありますか？",
    choices: [
      "sys_idフィールドのフィールドマップの[Source script]フィールドに定義し、ターゲットテーブルレコードのsys_idを返す",
      "ビジネスルールに定義し、trueまたはfalseを返す",
      "クライアントスクリプトに定義し、アラートメッセージを返す",
      "UIポリシーに定義し、フィールドの表示/非表示を返す"
    ],
    answer: 0,
    explanation: "条件付き結合のスクリプトは、sys_idフィールドのフィールドマップの[Source script]フィールドで定義します。インポート（ステージング）テーブルのレコード値を使用してターゲットテーブルレコードを更新するには、スクリプトがターゲットテーブルレコードのsys_idを返す必要があります。"
  },
  {
    id: 108,
    no: "43",
    type: "single",
    question: "テーブルのACLルールとフィールドのACLルールの評価方法について正しい説明はどれですか？",
    choices: [
      "テーブル・フィールドいずれのACLルールも、最も具体的なルールから最も一般的なルールへと順に照合される",
      "テーブルのACLルールのみ具体的な順に評価され、フィールドのACLルールは評価順が存在しない",
      "フィールドのACLルールのみ評価され、テーブルのACLルールは無視される",
      "ACLルールは常にランダムな順序で評価される"
    ],
    answer: 0,
    explanation: "オブジェクトをテーブルのACLルールで（最も具体的なルールから最も一般的なルールへと順に）照合し、オブジェクトをフィールドのACLルールでも同様に（最も具体的なルールから最も一般的なルールへと順に）照合します。"
  },
  {
    id: 109,
    no: "52",
    type: "single",
    question: "複数のテーブルを双方向の関係性で関連付け、関連するレコードを両方のテーブルの関連リストに表示できる関係性の種類はどれですか？",
    choices: ["1対多", "多対多", "拡張", "データベースビュー"],
    answer: 1,
    explanation: "多対多は、複数のテーブルを双方向の関係性で関連付けることができ、関連するレコードは両方のテーブルから関連リスト内に表示できる関係性です。受講者とクラスの関係が典型例です。"
  },
  {
    id: 110,
    no: "58",
    type: "single",
    question: "Form Builderで確認できる「Workspace view rules」の説明として正しいものはどれですか？",
    choices: [
      "ワークスペースビュールールのリストを、説明とタイプにより分類して表示し、リスト全体を精査することもできる",
      "データベースビューを作成するための専用画面である",
      "更新セットの内容を一覧表示する機能である",
      "ナレッジベースのワークフローを表示する機能である"
    ],
    answer: 0,
    explanation: "Workspace view rulesは、ワークスペースビュールールのリストで、説明とタイプにより分類されます。ワークスペースビュールールのリスト全体を精査することもできます。"
  },
  {
    id: 111,
    no: "65",
    type: "scenario",
    question: "シナリオ：新しく作成したカスタムアプリケーションのテーブルとビジネスロジックについて、開発者から「なぜ他のアプリケーションから自由にアクセスできないのか」と質問されました。最も適切な回答はどれですか？",
    choices: [
      "アプリケーションスコープが、アプリケーションファイルとデータへのアクセスを識別・制限することでアプリケーションを保護しているため",
      "ライセンスが不足しているため",
      "ネットワーク設定に問題があるため",
      "更新セットが正しくコミットされていないため"
    ],
    answer: 0,
    explanation: "アプリケーションスコープでは、アプリケーションファイルとデータに対するアクセスを識別して制限することによってアプリケーションを保護します。管理者は、あるアプリケーションについて他のアプリケーションがアクセスできる部分を指定できます。"
  },
  {
    id: 112,
    no: "67",
    type: "single",
    question: "ServiceNowの各インスタンスに割り当てられるURLの形式として正しいものはどれですか？",
    choices: [
      "https://<インスタンス名>.service-now.com",
      "https://servicenow.com/<インスタンス名>",
      "https://<インスタンス名>.github.io",
      "https://servicenow.<インスタンス名>.com"
    ],
    answer: 0,
    explanation: "ServiceNowのそれぞれのインスタンスには、「https://<インスタンス名>.service-now.com」のような一意のURLがあります。"
  },
  {
    id: 113,
    no: "71",
    type: "single",
    question: "ロールはServiceNow上でどのテーブルのレコードとして表されますか？",
    choices: ["Role [sys_user_role]", "User [sys_user]", "sys_user_group", "cmdb_ci"],
    answer: 0,
    explanation: "ロールは、Role [sys_user_role] テーブルのレコードで表されます。"
  },
  {
    id: 114,
    no: "29",
    type: "single",
    question: "独自のナレッジ承認ワークフローを定義している場合に、ナレッジ記事を公開済みステータスへ移すために使用できるサブフローはどれですか？",
    choices: [
      "Knowledge – Publish Knowledge",
      "Knowledge - Instant Retire",
      "Knowledge – Approval Retire",
      "Knowledge - Instant Publish"
    ],
    answer: 0,
    explanation: "Knowledge – Publish Knowledgeは、ナレッジ記事を公開済みステータスに移すサブフローです。独自のワークフローを定義している場合にこのサブフローを使用できます。"
  },
  {
    id: 115,
    no: "33",
    type: "single",
    question: "Employee Center Proの利用に必要なライセンスの組み合わせとして正しいものはどれですか？",
    choices: [
      "HRSD Pro、HRSD Enterprise、または個別ライセンス",
      "Customer Service Managementライセンスのみ",
      "追加ライセンスは一切不要",
      "CAB Workbenchライセンスのみ"
    ],
    answer: 0,
    explanation: "Employee Center Proは、Human Resources Service Delivery (HRSD) Pro、HRSD Enterprise、または個別ライセンスで利用できます。"
  },
  {
    id: 116,
    no: "44",
    type: "single",
    question: "アクセス制御の定義における「有効な操作」が指すものはどれですか？",
    choices: [
      "システムで実行できるアクション（CRUD）",
      "ユーザーのログイン時刻",
      "サーバーのIPアドレス",
      "画面の解像度"
    ],
    answer: 0,
    explanation: "有効な操作とは、システムで実行できるアクション（CRUD：作成・読み取り・更新・削除）を指します。"
  },
  {
    id: 117,
    no: "19,20",
    type: "scenario",
    question: "シナリオ：非エンジニアの業務担当者にもフローの処理内容を理解してもらいたいと考えています。ServiceNowのフローが持つ、この要望に応える特徴はどれですか？",
    choices: [
      "フローロジックについて自然言語で説明できる",
      "フローは必ずJavaScriptのコードでのみ表現される",
      "フローの内容は管理者にも一切表示できない",
      "フローは1つのアクションしか含められない"
    ],
    answer: 0,
    explanation: "フローはフローロジックについて自然言語で説明できるという特徴があり、対象分野の専門家が再利用可能なアクションを作成して共有できることで、プロセスの自動化が促進されます。"
  },
  {
    id: 118,
    no: "74",
    type: "single",
    question: "ServiceNowにおいて、ユーザーレコードやタスクレコードなど、あらゆるデータが最終的に保存される場所はどれですか？",
    choices: [
      "テーブルのレコード",
      "ローカルファイルシステムのみ",
      "外部のスプレッドシート",
      "ブラウザのキャッシュのみ"
    ],
    answer: 0,
    explanation: "データベースは、ユーザーレコードやタスクレコードなどのデータを含むテーブルで構成されます。結局のところ、ServiceNowのすべてのものは、テーブルのレコードに保存されています。"
  }
];
