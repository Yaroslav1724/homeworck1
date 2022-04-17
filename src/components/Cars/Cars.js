import {useEffect, useState} from "react";
import {carService} from "../../service";
import {Car} from "../Car/Car";


const Cars = ({newCar, setUserForUpdate}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars([...cars, newCar])
        }
    }, [newCar])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}setUserForUpdate={setUserForUpdate}/>)}
        </div>
    );
};

export {
    Cars
}