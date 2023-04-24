import React from 'react';

function Reviews() {
  return (
    <div>
      <div className='pt-12 bg-gray-100'>
       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-bold text-xl tracking-tight text-slate-900 lg:text-3xl text-center">
              Loved by Clients
            </h2>
            <p className="mt-1 text-xs lg:text-lg tracking-tight text-slate-700 text-center">
               At our agency, we're driven by results and always strive to achieve the best for our clients. 
               We're proud to say that our clients love our services, and we have the reviews to prove it.
               Take a look at what some of our satisfied clients have to say.
            </p>
        </div>
                <div className="relative rounded-2xl bg-blue-50 p-6 my-5 shadow-xl shadow-slate-900/10">
                     <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100"></svg> 
                     <blockquote className="relative">
                           <p className="text-xs md:text-sm lg:text-lg tracking-tight text-slate-900">
                             I can't say enough good things about this agency! They helped me take my social media game to the next level, 
                             and the results speak for themselves. 
                             If you're looking to grow your online presence, 
                             these guys are the real deal.
                            </p>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">Sandy Williams</div>
                          <div className="mt-1 text-sm text-slate-500">CEO, Sandy Comestics</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                           <img alt="userPic" 
                           src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
                            width="56" height="56" className="h-14 w-14 object-cover"/></div>
                    </figcaption>
                </div>
                <div className="relative rounded-2xl bg-blue-50 p-6 my-5 shadow-xl shadow-slate-900/10">
                     <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100"></svg> 
                     <blockquote className="relative">
                           <p className="text-xs md:text-sm lg:text-lg tracking-tight text-slate-900">
                               Working with this agency has been a game-changer for my business. 
                               Their social media expertise is top-notch, and 
                               they really took the time to understand my brand's unique voice and message. 
                               I would recommend them to anyone looking to make a big impact on social media.
                            </p>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">Ernest Chike</div>
                          <div className="mt-1 text-sm text-slate-500">Business Owner</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                           <img alt="userPic" 
                              src="https://images.pexels.com/photos/3928534/pexels-photo-3928534.jpeg?auto=compress&cs=tinysrgb&w=400" 
                               width="56" height="56" className="h-14 w-14 object-cover"/></div>
                    </figcaption>
                </div>
                <div className="relative rounded-2xl bg-blue-50 p-6 my-5 shadow-xl shadow-slate-900/10">
                     <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100"></svg> 
                     <blockquote className="relative">
                           <p className="text-xs md:text-sm lg:text-lg tracking-tight text-slate-900">
                                 Sellterr Media really did magic with my business, my ROI skyrockected, would definately recommend them to anyone 
                                 looking to advertise there business and make a kill online.
                            </p>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">Simena Mthemba</div>
                          <div className="mt-1 text-sm text-slate-500">CEO Heaven Herbs </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                           <img alt="userPic" 
                           src="https://images.pexels.com/photos/3894387/pexels-photo-3894387.jpeg?auto=compress&cs=tinysrgb&w=400" 
                           width="56" height="56" decoding="async" data-nimg="1" className="h-14 w-14 object-cover"  /></div>
                    </figcaption>
                </div>
                <div className="relative rounded-2xl bg-blue-50 p-6 my-5 shadow-xl shadow-slate-900/10">
                     <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-100"></svg> 
                     <blockquote className="relative">
                           <p className="text-xs md:text-sm lg:text-lg tracking-tight text-slate-900">
                           I've worked with a few different social media agencies in the past, but none have been as effective as this one. 
                           Their attention to detail and commitment to results is unmatched, 
                           and I've seen a significant increase in engagement and conversions since working with them.
                            </p>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">Shobayo Johnson</div>
                          <div className="mt-1 text-sm text-slate-500">CEO Sho Consultancy</div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                           <img alt="userPic" 
                           src="https://images.pexels.com/photos/6722642/pexels-photo-6722642.jpeg?auto=compress&cs=tinysrgb&w=400" 
                           width="56" height="56" decoding="async" data-nimg="1" className="h-14 w-14 object-cover"  /></div>
                    </figcaption>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Reviews;