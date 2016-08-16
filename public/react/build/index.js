var ContainerNav = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      { className: this.props.className },
      this.props.links.map(function (o, i) {
        return React.createElement('a', { key: i, href: o.url, className: o.cls, target: '_blank' });
      })
    );
  }
});

var SectionMe = React.createClass({
  render: function () {
    return React.createElement(
      'section',
      { className: 'section-me' },
      React.createElement('div', { className: 'selfie' }),
      React.createElement(
        'div',
        { className: 'text' },
        React.createElement(
          'div',
          { className: 'location' },
          'Seattle, WA'
        ),
        React.createElement(
          'p',
          null,
          'Hi, I\'m [A]'
        ),
        React.createElement(
          'p',
          null,
          'I\'m a full stack developer, and entrepreneur.'
        ),
        React.createElement(
          'p',
          null,
          'I create websites, from simple landing pages to full online platforms. Drop me ',
          React.createElement(
            'a',
            { href: 'mailto:andytlim@gmail.com?subject=Notice me senpai!', target: '_blank' },
            'a line'
          ),
          ' if you want to chat, I\'d love to talk!'
        )
      ),
      React.createElement(ContainerNav, {
        className: 'container-nav',
        links: [{ 'url': 'https://ca.linkedin.com/in/andytlim', 'cls': 'linkedin' }, { 'url': 'https://github.com/andytlim', 'cls': 'github' }]
      })
    );
  }
});

var pweb = React.createElement(SectionMe, null);