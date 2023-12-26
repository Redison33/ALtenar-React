import { FunctionComponent } from 'react';
import { Props } from '../Post/Post';
import { Menu, MenuButton } from './BurgerMenuStyle';
import { usePosts } from '../../state/storePosts';

const BurderMenu: FunctionComponent<Props> = (props) => {
  const postDelete = (id: number) => {
    const response = fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    });
  };
  const postAccess = (id: number) => {
    const response = fetch(`http://localhost:5000/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    });
  };
  return props.openMenu ? (
    <Menu>
      <form>
        <MenuButton onClick={() => postAccess(props.id)}>Опубликовать</MenuButton>
      </form>
      <form>
        <MenuButton onClick={() => postDelete(props.id)}>Удалить</MenuButton>
      </form>
    </Menu>
  ) : (
    ''
  );
};
export default BurderMenu;
