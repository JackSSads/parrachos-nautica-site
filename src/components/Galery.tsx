export const Galery = ({ image_list }) => {
    return (
        <section className="mt-8 mb-8 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Galeria</h2>
                    <p className="text-xl text-muted-foreground">Veja as belezas que te esperam</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {image_list.map((img, key) => (
                        <div className="relative overflow-hidden rounded-lg group cursor-pointer h-56 sm:h-72 md:h-80" key={key}>
                            <img

                                src={img.img}
                                alt={`${img.subtitle}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-semibold text-xl">{img.subtitle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};