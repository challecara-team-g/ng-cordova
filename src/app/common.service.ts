import { Injectable }    from '@angular/core';

import { TASKCONTENT } from './mock-taskcontents';
import { TaskContent } from './task-content';

@Injectable()
export class GoodsPassService {  

  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor() { }

  /** コンポーネント間受け渡し商品 */
  private goods :TaskContent;
  /** コンポーネントリフレッシュフラグ(falseの場合はリフレッシュしない) */
  private refleshFlg : Boolean = true;

  /** コンポーネント間受け渡し商品設定 */
  setGoods(goods: TaskContent) : void {
    //リクエストパラメータセット
    this.goods = goods;
  }
  /** コンポーネント間受け渡し商品取得 */
  getGoods() : TaskContent {
    return this.goods;
  }

  /** リフレッシュフラグ設定 */
  setRefleshFlg(refleshFlg: Boolean) {
    this.refleshFlg = refleshFlg;
  }
　/** リフレッシュフラグ取得 */
  getRefleshFlg() {
    return this.refleshFlg;
  }
  
  /** コンポーネント間受け渡し商品リフレッシュ */
  refleshGoods() : void {
    this.goods = new TaskContent;
  }


}
