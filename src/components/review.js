export default function Review() {
    const reviews = [
      {
        logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
        text: '"The decoration services provided were truly exceptional. They made my event look amazing."',
        avatar: "https://images.pexels.com/photos/2905825/pexels-photo-2905825.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: 'Emma Thompson',
        position: 'Event Coordinator'
      },
      {
        logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
        text: '"The photography service were exceptional! The team went above and beyond to ensure everything was perfect."',
        avatar: "https://images.pexels.com/photos/9929131/pexels-photo-9929131.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: 'Michael Johnson',
        position: 'Event Planner'
      },
      {
        logo: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
        text: '"Working with Auguri was an absolute pleasure. Every detail was perfect, adding a touch of elegance to our special day!"',
        avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: 'Sophia Garcia',
        position: 'Event Coordinator'
      }
    ];
  
    return (
      <div className="bg-gray-100 py-24 sm:py-32" id="reviews">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our clients say</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Client reviews are crucial for us. They provide valuable feedback and help improve our services.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {reviews.map((review, index) => (
              <section key={index} className="mx-auto flex max-w-xs flex-col gap-y-4 ">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <blockquote className="text-center text-lg font-semibold leading-8 text-gray-900 sm:leading-9">
                      <p>{review.text}</p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src={review.avatar}
                        alt=""
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base font-semibold text-gray-900">
                        {review.name}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    )
  }