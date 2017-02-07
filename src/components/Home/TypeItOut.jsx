/**
 * CodePen: http://codepen.io/html5andblog/pen/oxzXwm
 */
class TypeItOut extends React.Component {
  componentDidMount() {
    $('.type-it').typeIt({
      speed: 100,
      autoStart: false,
      loop: true,
      loopDelay: 10000
    })
    .tiSettings({speed: 900})
    .tiType('rc.')
    .tiSettings({speed: 100})
    .tiDelete(3)
    .tiSettings({speed: 200})
    .tiType(' gamer.')
    .tiDelete(7)
    .tiType(' coder.')
    .tiDelete(7)
    .tiType('n entrepreneur.')
    .tiDelete(15)
    .tiType('ndy.');
  }
  render() {
    return (
      <h1 className="type-it">I am [A]</h1>
    );
  }
}

export default TypeItOut;