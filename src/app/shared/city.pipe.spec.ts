import { CityPipe } from './city.pipe';
import { CityService } from './city.service';

describe('CityPipe', () => {
  it('create an instance', () => {
    let cityService: CityService;
    const pipe = new CityPipe(cityService);
    expect(pipe).toBeTruthy();
  });
});
