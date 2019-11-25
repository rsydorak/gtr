import List from './list';
import Create from './create';
import Show from './show';

export default createPurchaseTokenName => ({
  list: List,
  create: Create(createPurchaseTokenName),
  show: Show,
});
