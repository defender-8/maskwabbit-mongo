import React from 'react';

import Input from '../../../components/Form/Input/Input';
import Sorter from './Sorter';

import './ActionsTopPanel.scss';

function ActionsTopPanel({ onSearchChange, searchValue, onSorterChange, sorterObj }) {
  return (
    <div className="ActionsTopPanel">
      <div className="ActionsTopPanel-search">
        <Input
          placeholder="Search..."
          value={searchValue}
          allowClear={true}
          onChange={onSearchChange}
        />
      </div>
      <div className="ActionsTopPanel-sorter">
        <Sorter sorterObj={sorterObj} onChange={onSorterChange} />
      </div>
    </div>
  );
}

export default ActionsTopPanel;
