import PropTypes from 'prop-types';

import { Container } from './styles';

export function Input( { className, icon: Icon, ...rest}){
    return(
        <Container className={className}>
            {Icon && <Icon size={20}/>}
            <input  {...rest} />
        </Container>
    );
}

Input.propTypes = {
    icon: PropTypes.elementType,
    className: PropTypes.string, 
};

Input.defaultProps = {
    icon: null,
    className: '',
};