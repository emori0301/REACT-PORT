import { Link } from "react-router-dom";
import ContactForm from './ContactForm';
import GamePage from './GamePage';
import WebappPage from './WebappPage';

function Home() {

  return (
    <>
      <header className="text-gray-700 border-b border-gray-600">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-700 mb-4 md:mb-0">
            <span className="text-xl ml-3">えもりのポートフォリオ</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">ホーム</a>
            <a href="#Works" className="mr-5 hover:text-blue-400 duration-300">ワーク</a>
            <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">スキル</a>
            <a href="#Blog" className=" hover:text-blue-400 duration-300">ブログ</a>
          </nav>
        </div>
      </header>
      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl text-gray-900 font-medium mb-6">はじめまして、<br /></h1>
            <h1 className="text-2xl sm:text-4xl text-gray-900 font-medium mb-6">えもりです。<br /></h1>
            <h1 className="text-2xl sm:text-4xl text-gray-900 font-medium mb-6">エンジニアの卵です。</h1>
            <p className="mb-8 leading-relaxed">
              現在、職業訓練校でプログラミングを学んでいます。<br />
              趣味はソロキャンプとガチャガチャ集めと料理です。<br />
              フルスタックエンジニアを目指して日々勉強中です。
            </p>
            <ContactForm />
          </div>
          
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/tabekko.jpeg" alt=""></img>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-600" id="Works">
        <div className="container px-5 py-24 mx-auto" >
          <div className="text-center mb-20 ">
            <h1 className="text-2xl sm:text-3xl font-me mb-2 text-gray-900">ワーク</h1>
            <p className="pb-10 pt-10">
              新しいことにチャレンジすることが好きです。
            </p>
            <p className="pb-10">
              今はPythonでウェブスクレイピングやデータ分析を勉強中です。<br />
            </p>
            <p>
              ゲームを作ったり、いろんな人のゲームのコードを眺めるのも好きです。<br />
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="">
            <div className="flex -m-4 flex-wrap">
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 h-full rounded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                      <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z"
                            fill="currentColor"
                          />
                          </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">
                      ゲーム制作
                    </h2>
                  </div>
                  <div>
                    <p className="leading-relaxed text-base">
                      Python・Javascriptなどで簡単なものをメインに作りました。<br />
                      まだまだ拙い作品ですが現在進行形で製作中です。
                    </p>
                    <div className="flex mt-3 text-green-500 items-center">
                        <Link to={`/GamePage`} >もっと見る ☞</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 h-full rounded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                      <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z"
                            fill="currentColor"
                          />
                          </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">
                      レスポンシブサイト
                    </h2>
                  </div>
                  <div>
                    <p className="leading-relaxed text-base ">
                      このwebサイトはreact viteとtailwindで作りました。レスポンシブをcssではなく、
                      HTMLに直接記述しています。
                    </p>
                    <div className="flex mt-3 text-green-500 items-center">
                        <Link to={`/SitePage`} >もっと見る ☞</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-4">
                <div className="bg-gray-200 h-full rounded-lg p-8">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                      <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H11C10.4477 12 10 11.5523 10 11Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11 14C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H13C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14H11Z"
                            fill="currentColor"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M9.09447 4.74918C8.41606 4.03243 8 3.0648 8 2H10C10 3.10457 10.8954 4 12 4C13.1046 4 14 3.10457 14 2H16C16 3.0648 15.5839 4.03243 14.9055 4.74918C16.1782 5.45491 17.1673 6.6099 17.6586 8H19C19.5523 8 20 8.44772 20 9C20 9.55229 19.5523 10 19 10H18V12H19C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H18V16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H17.6586C16.8349 20.3304 14.6124 22 12 22C9.38756 22 7.16508 20.3304 6.34141 18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H6V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H6V10H5C4.44772 10 4 9.55229 4 9C4 8.44772 4.44772 8 5 8H6.34141C6.83274 6.6099 7.82181 5.45491 9.09447 4.74918ZM8 16V10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16Z"
                            fill="currentColor"
                          />
                          </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium">
                      ウェブアプリケーション
                    </h2>
                  </div>
                  <div>
                    <p className="leading-relaxed text-base">
                      学校ではPHP、独学でPythonのDjangoにてTODOアプリやSNSを作りました。
                    </p>
                    <div className="flex mt-3 text-green-500 items-center">
                        <Link to={`/WebappPage`} >もっと見る ☞</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-600" id="Skills">
        <div className="container px-5 py-24 mx-auto flex flex-wrap" >
          {/* left side */}
          <div className="rounded w-full lg:w-1/2 lg:mb-0">
            <img src="./img/pc.jpg" alt="" className="rounded pt-14"></img>
          </div>
          {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2 lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">スキル</h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white " style={{ width:"85%"}}>85%</div>
              </div>
              <h2 className="pt-5">CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white " style={{ width:"85%"}}>85%</div>
              </div>
              <h2 className="pt-5">Javascript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white " style={{ width:"70%"}}>70%</div>
              </div>
              <h2 className="pt-5">PHP</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white " style={{ width:"60%"}}>60%</div>
              </div>
              <h2 className="pt-5">Python</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div className="bg-green-600 text-xs leading-none py-1 text-center text-white " style={{ width:"65%"}}>65%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-600" id="Blog">
        <h1 className="text-2xl sm:text-3xl font-me mt-20 mb-2 text-gray-900" >ブログ</h1>
        <p className="pb-10 pt-10 ">
          学んだことを健忘録として残していきます。
        </p>
        <a href="https://qiita.com/emori_ku" class="btn py-3 px-5 border-0 rounded text-lg bg-green-500 text-white hover:bg-green-600 duration-300" target="_blank">ブログへいってみる</a>
      </section>
      <footer className=" text-gray-700 border-t border-gray-600 mt-20">
        <div className="flex mt-10">
          <div className="flex-1 w-screen">
            <div class="flex justify-center">
              <div className="pr-10 text-gray-700">@Copyright</div>
              <div className="pr-10 text-gray-700">2023 </div>
              <div className="pr-10 text-gray-700">emori</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
