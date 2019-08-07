// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

const ffi = require('ffi-napi');
const path = require('path');

const fibonacci = ffi.Library(
  path.join(__dirname, '../target/debug/libfibonacci'),
  {
    calc: ['int', ['int']]
  }
);

const result = fibonacci.calc(30);
console.log(`Fibonacci: ${result}`);

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
