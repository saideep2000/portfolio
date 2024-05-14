import React, { useRef } from "react";
import "./cloud.scss";

const Cloud = () => {
    const carouselRef = useRef(null);

    const slide = (direction) => {
        const { current } = carouselRef;
        if (direction === 'left') {
            current.scrollLeft -= current.offsetWidth;
        } else {
            current.scrollLeft += current.offsetWidth;
        }
    };

    const cards = [
        {
            title: "VPC Architecture Guide",
            description: "Detailed walkthrough on building a production-ready VPC, showcasing best practices for security and scalability.",
            info: "Learn More",
            img: "/cloud/building-production-ready-vpc.png",
            link: "https://saideepsamineni.notion.site/Building-VPC-from-scratch-b7404162acb14982931ab6cdaa03f5b7?pvs=74"
        },
        {
            title: "CI/CD Pipeline Creation",
            description: "Comprehensive guide to setting up a CI/CD pipeline from scratch, emphasizing automation and integration strategies.",
            info: "Learn More",
            img: "/cloud/building-ci-cd-pipeline.png",
            link: "https://saideepsamineni.notion.site/Building-CI-CD-Pipeline-9c47a3ccc3fd4b76a456160f576d6f23"
        },
        {
            title: "AWS Cost Optimization",
            description: "Strategies for cost reduction in AWS, focusing on optimizing EBS snapshots and resource allocation.",
            info: "Learn More",
            img: "/cloud/aws-cost-optimization.png",
            link: "https://saideepsamineni.notion.site/AWS-Cost-Optimisation-7fecb31aa0ba4454b63f33625211ceec?pvs=4"
        },
    ];

    const certification = {
        name: "AWS Certified Cloud Practitioner - 2024",
        link: "#"
    };

    return (
        <>
            <div className="carousel-container">
                <h2 className="carousel-heading">Cloud Architectures Insights</h2>
                <button className="arrow left" onClick={() => slide('left')}>&lt;</button>
                <div className="carousel" ref={carouselRef}>
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={card.img} alt={card.title} className="card-image" />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <button onClick={() => window.open(card.link, '_blank')}>{card.info}</button>
                        </div>
                    ))}
                </div>
                <button className="arrow right" onClick={() => slide('right')}>&gt;</button>
            </div>
            <div className="certifications-container">
                <h2 className="certification-heading">Cloud certifications</h2>
                <ul className="certification-list">
                    <li> 
                        &#8226; {certification.name} - <a href={certification.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </li>
                </ul>
            </div>  
        </>
    );
};

export default Cloud;
