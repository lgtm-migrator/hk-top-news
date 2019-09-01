import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as newsActions from '@store/actions';
import Header from '@components/Header';

const mapStateToProps = state => ({
  pageLoading: state.pageLoading
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(newsActions, dispatch)
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export { HeaderContainer as Header };
