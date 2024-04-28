const callouts = [
    {
        name: 'Photoshot Decoration',
        imageSrc: '/PhotoshotDecor.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Birthday Decoration',
        imageSrc: '/BirthdayDecor.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Romantic Dinner Decoration',
        imageSrc: '/backyardDinner.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Reunion Decoration',
        imageSrc: '/ReunionDecor.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Newborn Photoshot',
        imageSrc: '/NewbornPhoto.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Wedding Photoshot',
        imageSrc: '/WeddingPhoto.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function Services() {
    return (
        <div className="bg-gray-100" id="services">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services we offer</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            All kind of decorations and photography services
                        </p>
                    </div>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="mt-10 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64 ">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center hover:scale-150 "
                                    />
                                </div>
                                <p className="mt-3 text-base font-semibold text-gray-900">{callout.name}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}