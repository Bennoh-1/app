import React from 'react'


const Gallery = () => {
  return (
    <div>
    <section class="mx-auto max-w-6xl py-12">
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center">
                    <div slot="middle-left" class="max-w-2xl">
                        <div class="flex flex-row">
                            <div class="w-2/3 bg-orange-600 p-5 text-teal-100 flex justify-center items-center h-48 text-3xl font-black uppercase">Awesome adventure</div>
                            <div class="w-1/3 bg-teal-600 text-orange-100 p-5 flex justify-center items-center">Travel and Inspire your Life ...</div>
                        </div>
                    </div>
                </div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center"></div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center">
                    <div slot="middle-right" class="max-w-xs">
                        <div class="flex flex-col justify-center h-48 p-3">
                            <div class="text-xl font-black text-teal-700">Awesome discovery we did</div>
                            <div class="text-sm my-3">The results are spectacular, you can checkout the source for more informations</div>
                            <div class="text-sm text-teal-700 cursor-pointer">Read more</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-center items-center">
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2">
                    <div slot="bottom-left" class="max-w-xs">
                        <div class="p-5 shadow-md m-2 mt-4"><img class="object-scale-down h-30" src="https://images.unsplash.com/photo-1509895846073-1c731f9f0950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZHRyaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="step3"/>
                            <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">superb</div>
                            <div class="text-xl font-bold mb-2">Enjoyable</div>
                            <div class="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut vel facilis iste, dicta est minus alias, aliquam, velit nisi quo assumenda porro dignissimos doloremque temporibus eum saepe aspernatur ab.</div>
                        </div>
                    </div>
                </div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center mx-0 md:mx-4">
                    <div slot="bottom-center" class="max-w-xs">
                        <div class="p-5 shadow-md m-2 mt-4"><img class="object-scale-down h-30" src="https://images.unsplash.com/photo-1529424601215-d2a3daf193ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYWR0cmlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="step3"/>
                            <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Blog post</div>
                            <div class="text-xl font-bold mb-2">Big case study</div>
                            <div class="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut vel facilis iste, dicta est minus alias, aliquam, velit nisi quo assumenda porro dignissimos doloremque temporibus eum saepe aspernatur ab.</div>
                        </div>
                    </div>
                </div>
                <div class="transition-all ease-in-out duration-1000 flex flex-col justify-center ml-0 md:ml-2">
                    <div slot="bottom-right" class="max-w-xs">
                        <div class="p-5 shadow-md m-2 mt-4"><img class="object-scale-down h-30" src="https://images.unsplash.com/photo-1532524533199-6c1e15222936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJvYWR0cmlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="step3"/>
                            <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">adventorous</div>
                            <div class="text-xl font-bold mb-2">more fun</div>
                            <div class="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut vel facilis iste, dicta est minus alias, aliquam, velit nisi quo assumenda porro dignissimos doloremque temporibus eum saepe aspernatur ab.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></div>
    
  )
}

export default Gallery