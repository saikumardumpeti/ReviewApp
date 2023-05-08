import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prev => ({index: prev.index - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="image-container">
        <img src={imgUrl} alt={username} className="image" />
        <p className="name">{username}</p>
        <p className="description">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prev => ({index: prev.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const currentReviewDetails = reviewsList[index]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousal-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt=" left arrow"
              className="arrow-btn"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt=" right arrow"
              className="arrow-btn"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
