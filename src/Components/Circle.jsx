
import PropTypes from 'prop-types';

const Circle = ({circle, handleClickCircle }) => {

    const CircleStyle = circle.map((playerId, index ) => {
        //Nested Ternary Operator
       /* let bgColor = playerId === 1 ? 'bg-green-500' : playerId ===2 ? 'bg-red-500': 'bg-white'; */

    //Nested if else
    let bgColor = 'bg-white';
        if(playerId === 1){
            bgColor = 'bg-green-500';
        }
        if(playerId === 2){
            bgColor = 'bg-red-500';
        } 

        return (
            <div key={index} data-id={index} className={`w-10 h-10 rounded-full border border-black cursor-pointer overflow-hidden ${bgColor} flex justify-center playerIds-center`} onClick={()=> handleClickCircle(index)}> 
            </div>
        )
    })

    return (
        <div className="bg-yellow-100 border-4 border-orange-300 h-[20em] w-[20em] rounded-3xl p-4 shadow-2xl shadow-black grid grid-cols-4 grid-rows-4 gap-2  place-items-center">
            {CircleStyle}
        </div>
    )

}

Circle.propTypes = {
    circle: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClickCircle: PropTypes.func.isRequired,
}

export default Circle

