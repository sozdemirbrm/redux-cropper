import React from 'react';
import PureComponent from 'react-pure-render/component';
import {getTransform} from '../../utilities';
import CSSModules from "react-css-modules";
import styles from  './styles.module.scss';

class WrapBox extends PureComponent {
	render() {
		const {wrapBox} = this.props;

		const url = wrapBox.get('url');
		const canvas = wrapBox.get('canvas');
		const image = wrapBox.get('image');

		const offset = image.get('offset').subtract(canvas.get('offset'))

		return <div styleName="cropper-wrap-box">
			<div styleName="cropper-canvas" style={{
				...canvas.get('size').getSize()
				// , ...offset.getOffset()
		}}>
				<img styleName="cropper-canvas-img" src={url}
						 style={{
						 		...image.get('size').getSize(),
						 		// ...offset.getOffset(),
						 		transform: getTransform({
									rotate: image.get('rotate'),
									scale: image.get('scale')
						 		})
							}}/>
			</div>
		</div>
	}
}

export default CSSModules(WrapBox, styles, {allowMultiple: true})
