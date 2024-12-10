import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  render() {
    const {imageDetail, onClickImage, isActive} = this.props
    const onClickHandle = () => {
      onClickImage(imageDetail.id)
    }

    const isActiveCssStyle = isActive ? 'dark-color' : ''
    return (
      <li>
        <button type="button" onClick={onClickHandle}>
          <img
            className={`light-color ${isActiveCssStyle}`}
            src={imageDetail.thumbnailUrl}
            alt={imageDetail.thumbnailAltText}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
