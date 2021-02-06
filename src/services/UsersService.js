import { apiService } from './HttpService';
//end points
import { getUserDetailsUrl, getUsersListUrl } from './EndPoints';

class UsersService {
	static getUsersList() {
		return apiService({
			method: 'GET',
			url: getUsersListUrl(),
		});
	}
	static getUserDetails({ id }) {
		return apiService({
			method: 'GET',
			url: getUserDetailsUrl({ id }),
		});
	}
}

export default UsersService;
