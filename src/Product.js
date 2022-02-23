import React, { Children, useState } from 'react'

const Product = () => {
    const [person, setPerson] = useState(1);
    const [children, setchildren] = useState(0);
    const [room, setRoom] = useState(1);


    function reduceHandle() {
        setRoom(room - 1)
    };
    function addHandle() {
        setRoom(room + 1)
    };

    function reducePerson() {

        let personCont = person - 1;
        let pr = Math.ceil(personCont / 4)
        console.log("room" + room);
        if (room >= pr) {
            setRoom(pr);
        }

        setPerson(person - 1);
    };
    function addPerson() {

        let personCont = person + 1;
        let pr = Math.ceil(personCont / 4)
        console.log("room" + room);
        if (room <= pr) {
            setRoom(pr);
        }

        setPerson(person + 1);
    };

    function addChild() {
        setchildren(children + 1);
    };
    function reduceChild() {
        setchildren(children - 1);
    };

    return (
        <>
        <h1>Room Booking</h1>
        <div className="container" style={{ marginTop: "207px", width: "713px" }} >
            <ul className="list-group " >
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    ROOMS
                    <span className=" bg-light ">
                        <button className="btn btn-primary mx-3" onClick={reduceHandle} disabled={room <= 1}>-</button>
                        <span className="mx-3">{room}</span>
                        <button className="btn btn-danger mx-3" onClick={addHandle} disabled={room >= 5}>+</button>
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    ADULTS
                    <span className=" bg-light">
                        <button className="btn btn-primary mx-3" onClick={reducePerson} disabled={person <= 1}>-</button>
                        <span className="mx-3">{person}</span>
                        <button className="btn btn-danger mx-3" onClick={addPerson} disabled={person >= 20}>+</button>
                    </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    CHILDREN
                    <span className="bg-light">
                        <button className="btn btn-primary mx-3" onClick={reduceChild} disabled={children <= 0}>-</button>
                        <span className="mx-3">{children}</span>
                        <button className="btn btn-danger mx-3" onClick={addChild}>+</button>
                    </span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Product