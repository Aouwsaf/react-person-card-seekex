import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

export default function PersonCard({PersonData}) {
    return (
        <Link to={"profile/" + PersonData.id} className="col-md-4 col-lg-3 col-6 mb-3">
            <Card className="p-4 shadow-custom">
                <Card.Header className="createPostHead d-flex align-items-center justify-content-between p-0 border-0 bg-white">
                    { PersonData.image
                        ?<Image src={PersonData.image} alt="username" className="circled-image-40" roundedCircle/>
                        :<svg style={{textAnchor: "middle"}} width="80" height="80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{PersonData.username}</text></svg>
                    }
                </Card.Header>
                <Card.Body className="p-0 mt-4 text-center">
                    <h5 className="h6 text-start">{PersonData?.firstName}</h5>
                    <h5 className="h6 text-start">{PersonData?.email}</h5>
                    <h5 className="h6 text-start">{PersonData?.birthDate}</h5>
                    <h5 className="h6 text-start">{PersonData?.gender}</h5>
                </Card.Body>
            </Card>
        </Link>
    )
}
