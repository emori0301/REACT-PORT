import React from 'react';


const WebappPage = () => {
  
  return (
    <div>
        <section className="text-gray-700 border-t border-gray-600" >
            <div className="container px-5 py-24 mx-auto" >
                <div className="text-center mb-20 ">
                <h1 className="text-2xl sm:text-3xl font-me mb-2 text-gray-900">Webアプリ</h1>
                <p className="pb-10 pt-10">
                    Excel自動化処理、Webスクレイピング、機械学習など勉強中です。
                </p>
                <p className="pb-10">
                    GitHubにできたものは上げていこうと思います。<br />
                </p>
                <p>
                    現在製作中のものも多くありますので、随時追加します。<br />
                </p>
                </div>
            {/* カードのdivタグ */}
                <div className="">
                    <div className="flex -m-4 flex-wrap">
                        <div className="md:w-1/3 p-4">
                            <div className="bg-gray-200 h-full rounded-lg p-8">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-gray-900 text-lg font-medium">Amazon価格追跡アプリ</h2>
                                </div>
                                <div>
                                    <img src="./img/app1.png" alt=""></img>
                                    
                                </div>
                                <p className="leading-relaxed text-base">
                                商品URLを入力すると定期的に価格を追跡し、希望額になるとLINE通知されるようなアプリケーションです。<br />
                                制作期間 : 5日<br />
                                使用言語 : Python(Tkinter)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
      </section>
    </div>
  );
};

export default WebappPage;