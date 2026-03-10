function PhotosSection() {
    return(
        <section className=" flex flex-col relative w-[80%]" >
            <img src="./public/photo1.png" alt="photo" loading="lazy" className="" />
            <p className="rotate-90 absolute text-sm -right-14 top-8">Product Owner</p>
            <p className="font-bold text-sm">Bill Mahoney </p>
        </section>
    );
}

export default PhotosSection;