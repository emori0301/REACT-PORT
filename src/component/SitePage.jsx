import React from 'react';


const SitePage = () => {
  
  return (
    <div>
        <section className="text-gray-700 border-t border-gray-600" >
            <div className="container px-5 py-24 mx-auto" >
                <div className="text-center mb-20 ">
                <h1 className="text-2xl sm:text-3xl font-me mb-2 text-gray-900">レスポンシブサイト</h1>
                <p className="pb-10 pt-10">
                このポートフォリオサイトはReact Viteで作成してます。
                </p>
                <p className="pb-10">
                その他、PythonのDjangoを触るのが最近の趣味です。<br />
                </p>
                </div>
            {/* カードのdivタグ */}
                <div className="">
                    <div className="flex -m-4 flex-wrap">
                        <div className="md:w-1/3 p-4">
                            <div className="bg-gray-200 h-full rounded-lg p-8">
                                <div className="flex items-center mb-3">
                                    <h2 className="text-gray-900 text-lg font-medium">レンジ専用お料理掲示板</h2>
                                </div>
                                <div>
                                <iframe className="w-full" src="https://www.youtube.com/embed/WnwxERujTlw?si=9x31Phwkc4VG-hRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <p className="leading-relaxed text-base">
                                料理することが趣味で、毎朝お弁当を作っています。<br />
                                時間がない時の時短レシピのサイトがあればと思い作りました。<br />
                                制作期間 : 2週間<br />
                                使用言語 : Python(Django)
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

export default SitePage;