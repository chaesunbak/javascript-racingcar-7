import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const CAR_NAMES = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)'
    );
  }
}

export default App;