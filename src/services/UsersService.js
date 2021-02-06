import { apiService } from './HttpService';
import { getUsersListUrl } from './EndPoints';

class UsersService {
	static getUsersList() {
		return apiService({
			method: 'GET',
			url: getUsersListUrl(),
		});
	}
}

export default UsersService;
