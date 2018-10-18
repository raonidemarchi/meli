'use strict'

require('../js/helper.js');
QUnit.module('Helper functions');

QUnit.test('format money test', (assert) => {
    let result = 29990.20.formatMoney(2, ',', '.');

    assert.ok(result === '29.990,20', 'Outputs ' + result + ', expects 29.990,20');
});

QUnit.test('capitalize text test', (assert) => {
    let result = 'hello meli'.capitalize();

    assert.ok(result === 'Hello meli', 'Outputs ' + result + ', expects Hello meli');
});