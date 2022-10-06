const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const handleClick = () => alert("klik!");

const main = (
    <div>
        <h1 person="osoby" onClick={ handleClick } className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aspernatur sint quisquam voluptatum necessitatibus nostrum temporibus quasi voluptas in numquam explicabo harum eveniet, vel est atque reprehenderit similique error eius.</p>
    </div>
)
const largetxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione id placeat, delectus, culpa magnam nulla sapiente eum temporibus voluptatibus, maxime incidunt vitae dignissimos laudantium illum voluptates! Quis, cumque. Ipsa!"
const footer = (
<footer>
    <p className={classBig}>stopka</p>
    <p>{largetxt}</p>
</footer>
)

const app = [header, main, footer]

ReactDOM.render(app, document.getElementById('root'))

