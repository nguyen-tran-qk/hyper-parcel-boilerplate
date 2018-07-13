import {h, app} from 'hyperapp';

const view = () => (
  <div>
    <h4>Hello there, we are Hyperapp and Parcel.</h4>
    <p>We've been expecting you, developer. Let's build great things together!</p>
  </div>
)

app({}, {}, view, document.getElementById('hyper-root'));