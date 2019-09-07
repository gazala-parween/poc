import React from 'react';
import Header from './Header';

const Dashboard = React.createClass({
  getInitialState() {
    return {
     slideIndex: 1,
     show: false,
     slectedNums: []
    }
  },
  componentDidMount() {
    let uid = localStorage.getItem("username");
    if (uid != "shaadi") {
      browserHistory.push('/');
    }
    this.showSlides(1);
  },
  plusSlides(e, n) {
    this.showSlides(this.state.slideIndex += n);
  },
  change(e) {
    var index= parseInt(e.target.dataset.key);
    this.state.slectedNums.push(index+1)
    this.createSlides(index+1);
  },
  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {this.state.slideIndex = 1}
    if (n < 1) {this.state.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[this.state.slideIndex-1].style.display = "block";
  },
  createSlides(n) {
    var slideP = document.getElementById("slideshow-container");
    var slide = ""
    for (let i=1; i<=n; i++) {
      slide += '<div class="mySlides fade"><div class="numbertext">'+i+'/'+n+'</div><div class="text">'+this.props.words[i-1]+'</div></div>'
    }
    slideP.innerHTML = slide;
    this.setState({
      show:true
    })
    this.showSlides(n);
  },
  overlay() {
    document.getElementById("overlay").style.display = "block";
    var spanList = '<div>You have seleted</div>'
    if (this.state.slectedNums.length > 0) {
      for (let i in this.state.slectedNums) {
        spanList += ' <span>'+this.state.slectedNums[i]+'</span> '
      }
    } else {
      spanList += '<span>No number</span>'
    }
    document.getElementById("overlay").innerHTML = spanList
  },
  closeOverlay(e) {
    document.getElementById("overlay").style.display = "none";
  },
  render() {
    var that = this
    return (
      <div>
      <div id="overlay" onClick={(e)=>this.closeOverlay()}></div>
      <Header />
      <div className="dropdown">
        <span>Select slides</span>
        <div className="dropdown-content" id="select">
        {
          this.props.words.map(function(item, i){
              return(
                <div key={i} data-key={i} className="dropdown-div" onClick={that.change}>{i+1}</div>
              )
          })
        }
        </div>
      </div>
      {this.state.show ? <a className="prev" onClick={(e) => this.plusSlides(e, -1)}>&#10094;</a> :null }
      <div id="slideshow-container">
        <div className="mySlides fade">
          <div className="text">Please select slide number</div>
        </div>
      </div>
      {this.state.show ? <a className="next" onClick={(e) => this.plusSlides(e, 1)}>&#10095;</a> :null}
      <div id="finish" onClick={(e) => this.overlay()}>Finish</div>
      </div>
    );
  }
});

export default Dashboard;
