// Nova Lux Capital 全站升級 - 含內部模組與專案管理

export default function NovaLuxSite() {
  return (
    <div className="bg-white text-gray-900">
      {/* 導覽列 */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Nova Lux Capital</h1>
          <ul className="flex space-x-6">
            <li><a href="#home">首頁</a></li>
            <li><a href="#about">關於我們</a></li>
            <li><a href="#platform">平台</a></li>
            <li><a href="#strategy">策略</a></li>
            <li><a href="#team">團隊</a></li>
            <li><a href="#mcn">MCN</a></li>
            <li><a href="#news">新聞</a></li>
            <li><a href="#whitepaper">白皮書</a></li>
            <li><a href="#contact">聯繫</a></li>
            <li><a href="#dashboard">中控中心</a></li>
            <li><a href="#projects">專案管理</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero 首頁 */}
      <section id="home" className="h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-bold mb-4">Capital Beyond Borders</h2>
        <p className="text-xl mb-6">Global Vision. Digital Precision. Strategic Depth.</p>
        <a href="http://mcnglobaltld.top/" target="_blank" rel="noopener" className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100">立即下載 App</a>
      </section>

      {/* Dashboard 模擬中控頁面 */}
      <section id="dashboard" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl font-bold mb-4">Nova Lux 中控中心</h3>
          <p className="mb-6">此頁為內部模擬總覽面板，展示業務摘要、回報曲線、專案進度等。僅授權使用者可操作。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">平台總體下載數</h4>
              <p className="text-4xl font-bold text-green-400">14,280</p>
              <p className="text-sm text-gray-400">上週增長 12.5%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">日活帳戶 (DAU)</h4>
              <p className="text-4xl font-bold text-yellow-300">3,221</p>
              <p className="text-sm text-gray-400">日均穩定上升</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">進行中策略週期</h4>
              <ul className="list-disc ml-5 text-sm mt-2 text-gray-300">
                <li>週期 A：7 日短線（剩餘 3 天）</li>
                <li>週期 B：14 日對沖（進行中）</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">私募測試通道狀態</h4>
              <p className="text-green-400">封閉中</p>
              <p className="text-xs text-gray-400">內部邀請制 | 需授權碼進入</p>
            </div>
          </div>
        </div>
      </section>

      {/* 專案管理頁面 */}
      <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold mb-6">內控專案管理</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold">私募測試專案 #MCN-AX3</h4>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">測試中</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">MCN Global 合作內部通道專案，模擬封閉性回報模型。</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm text-gray-500">進度：68%</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold">策略部署 #STR-2207</h4>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">執行中</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">七日資產輪動策略正在部署中，涉及雙層對沖風控。</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm text-gray-500">進度：40%</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-600">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xl font-semibold">Pavilion 接入模組 #PV-12</h4>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">審查中</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">接入 Pavilion Capital 結構認證，等待風險驗證報告。</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
              <p className="text-sm text-gray-500">進度：25%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
