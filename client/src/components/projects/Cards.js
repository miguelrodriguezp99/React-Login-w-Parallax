import React, {useEffect, useState} from 'react'
import '../../styles/cards.css'



function Cards(){
  
    return (
        <>
        <div className="card-container">
            <span className="background">
                <span className="centering">
                    <section className="articles">
                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-
                                        clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=
                                        st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c
                                        5026366fe41ae7d18e05e7e406b"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Praesent in mauris eu tortor porttitor accumsan. 
                                    <a href="#" className="read-more" title="Read More">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
                        <article>            
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-
                                        mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=900&t=
                                        st=1687123407~exp=1687124007~hmac=15a1b5a4d3a5af66dfba67bdcd577f769f813
                                        bf06fc8b5e50f32f6503099bbd8"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 2</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Praesent in mauris eu tortor porttitor accumsan. 
                                    <a href="#" className="read-more" title="Read More">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
            


                        
                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1800&t=st=1687169672~exp=1687170272~hmac=b66f9b9c1e344cbfe6fe2e5f65e94ebb8d418dad2e2af2b892ad9ac60e9eb79c"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 3</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>

                        <article>
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=900&t=st=1687123477~exp=1687124077~hmac=6e8b1735a2cb25be79f248b6a3307a37a15b080dee114565d01704b97d432a80"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 4</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
                        <article>            
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 5</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
                        <article>            
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 5</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
                        <article>            
                            <figure>
                                <img
                                    src="https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb"
                                    alt="Preview"
                                    title="Preview"
                                />
                            </figure>
                            <div className="article-preview">
                                <h2>My Blog 5</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan. 

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>
                                </p>
                            </div>
                        </article>
                        
                    </section>
                    
                </span>
                
            </span>
            
        </div>

        
        </>
    );
}

export default Cards;
