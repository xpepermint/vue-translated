[![NPM Version](https://badge.fury.io/js/vue-translated.svg)](https://badge.fury.io/js/vue-translated)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/vue-translated.svg)](https://gemnasium.com/xpepermint/vue-translated)

# [vue](https://vuejs.org)-[translated](https://github.com/xpepermint/translatedjs)

> Internationalization (i18n) and localization (l10n) library for Vue.js v2.

This plugin integrates the [translated.js](https://github.com/xpepermint/translatedjs) library into your [Vue.js](https://vuejs.org) application.

This is a light weight open source package for [Vue.js](https://vuejs.org). The source code is available on [GitHub](https://github.com/xpepermint/vue-translated) where you can also find our [issue tracker](https://github.com/xpepermint/vue-translated/issues).

## Related Projects

* [translated.js](https://github.com/xpepermint/translatedjs): Internationalization and localization for JavaScript and Node.js

## Installation

Run the command below to install the package.

```
$ npm install --save vue-translated translated
```

When used with a module system, you must explicitly install `vue-translated` via `Vue.use()`.

```js
import Vue from 'vue';
import VueTranslated from 'vue-translated';

Vue.use(VueTranslated);
```

## Getting Started

Initialize [translated.js](https://github.com/xpepermint/translatedjs) and define a user model.

```js
import {I18n} from 'translated';

const i18n = new I18n({
  locale: 'en-US',
  messages: {
    hello: 'Hello, {name}.'
  }
});
```

Attach the `i18n` instance to your Vue.js application.

```js
const app = new Vue({
  i18n, // injecting i18n into child components
  ...
});
```

By passing the `i18n` instance to the root `Vue` instance as the `i18n` option, the `$i18n` property is injected into every child component.

## Usage Example

This plugin registers `i18n` methods so you can use them directly.

```html
<template>
  <div>
    <p>{{ $formatMessage('hello', {name: 'John'}) }}</p>
    <p>{{ $formatNumber(1000.13, {format: 'integer'}) }}</p>
    <p>{{ $formatDate(Date.now(), {format: 'long'}) }}</p>
    <p>{{ $formatTime(Date.now(), {format: 'medium'}) }}</p>
    <p>{{ $formatRelativeTime(Date.now() - 10000) }}</p>
  </div>
</template>
```

## API

Please check [translated.js](https://github.com/xpepermint/translatedjs) API for details.

**mv.$formatDate(value, options)**

> Converts a value into formatted date string.

| Name | Type | Required | Default | Description
|------|------|----------|---------|------------
| value | Date, Integer | Yes | - | Date object.
| options | Object | No | - | Options which are passed directly into the  [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) constructor.

```html
<p>{{ $formatDate(Date.now(), {month: 'numeric', year: 'numeric'}) }</p>
```

**mv.$formatMessage(key, vars)**

> Compiles a message into a formatted string.

| Name | Type | Required | Default | Description
|------|------|----------|---------|------------
| key | String | Yes | - | ICU message (supports `number`, `date`, `plural`, and `select`).
| vars | Object | No | - | Data object.

You can use a `plural` argument to select sub-messages based on a numeric value, together with the plural rules for the specified language.

```html
<p>{{ $formatMessage(`Hey {name}!`, {name: 'John'}) }</p>
```

**mv.$formatNumber(value, options)**

> Converts a value into formatted string.

| Name | Type | Required | Default | Description
|------|------|----------|---------|------------
| value | Number | Yes | - | Integer or decimal number.
| options | Object | No | - | Options which are passed directly into the  [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) constructor.

```html
<p>{{ $formatNumber(1234.56, {maximumFractionDigits: 0}) }</p>
```

**mv.$formatRelativeTime(value, options)**

> Converts a value into relative time (e.g. 3 days ago).

| Name | Type | Required | Default | Description
|------|------|----------|---------|------------
| value | Date, Integer | Yes | - | Date object.
| options | Object | No | - | Options for customizing the output (`units` and `style`).

```html
<p>{{ $formatRelativeTime(Date.now()) }</p>
```

**mv.$formatTime(value, options)**

> Converts a value into formatted time string.

| Name | Type | Required | Default | Description
|------|------|----------|---------|------------
| value | Date, Integer | Yes | - | Date object.
| options | Object | No | - | Options which are passed directly into the  [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) constructor.

```html
<p>{{ $formatTime(Date.now(), {hour: 'numeric'}) }</p>
```

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
