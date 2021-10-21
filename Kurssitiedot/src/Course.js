const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => {
    const reducer = (previousValue, currentValue) => previousValue + currentValue.exercises;
    const sum = parts.reduce(reducer, 0);
    return (
        <b>Number of exercises {sum}</b>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Course = ({ courses }) => {
    console.log(courses);
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => {
                return (
                    <>
                        <Header name={course.name} />
                        <Content parts={course} />
                        <Total parts={course.parts} />
                    </>
                )
            })}
        </div>
    )
}

export default Course;