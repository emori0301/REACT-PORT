import React from 'react';


const GamePage = () => {
  
  return (
    <div>
        <section className="text-gray-700 border-t border-gray-600" >
            <div className="container px-5 py-24 mx-auto" >
                <div className="text-center mb-20 ">
                <h1 className="text-2xl sm:text-3xl font-me mb-2 text-gray-900">ゲームページ</h1>
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
                                    <h2 className="text-gray-900 text-lg font-medium">ボールゲーム</h2>
                                </div>
                                <div>
                                    <iframe className="w-full"src="https://www.youtube.com/embed/_GjICdXnX90?si=0nAaiI4nv7UCvdD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <p className="leading-relaxed text-base">
                                流行りのスイカゲーム風ボールゲーム<br />
                                制作期間 : 1週間<br />
                                使用言語 : Python(Pygame/Pymunk)
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

export default GamePage;