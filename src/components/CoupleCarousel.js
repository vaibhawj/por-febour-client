import React from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

class CoupleCarousel extends React.Component {

    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    componentWillMount() {
        axios.get('https://res.cloudinary.com/dqixonz2g/image/list/wedding.json')
            .then(res => {
                const posts = res.data.resources;
                let iD = 0;
                let images = (posts.map(post => {
                    return ({ url: `https://res.cloudinary.com/dqixonz2g/image/upload/w_900,h_675,c_fill,g_faces/v${post.version}/${post.public_id}.${post.format}`, caption: post.context && post.context.custom.caption, id: iD++ });
                }));

                this.setState({ images });
            });

    }

    render() {

        return (
            <div>
                <Carousel>
                    {
                        this.state.images.map(img => {
                            return (<Carousel.Item key={img.id}>
                                <img src={img.url} alt={img.caption} />
                                <Carousel.Caption >
                                    <p>{img.caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        })
                    }
                </Carousel>

            </div>
        );
    }

}

export default CoupleCarousel;