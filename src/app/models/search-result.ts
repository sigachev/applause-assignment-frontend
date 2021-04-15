import {Tester} from './tester';
import {DeviceSearchResults} from './device-search-results';


export class SearchResult {
  tester: Tester;
  devicesSearchResults: DeviceSearchResults[];
  totalBugs = 0;
}

