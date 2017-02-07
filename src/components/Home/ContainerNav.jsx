class ContainerNav extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.links.map(function(o, i) {
          return <a key={i} href={o.url} className={o.cls} target='_blank'></a>;
        })}
      </div>
    );
  }
}

export default ContainerNav;