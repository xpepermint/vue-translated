<template>
  <div>
    Examples:
    <p>{{ $formatMessage('hello', {name: 'John'}) }}</p>
    <p>{{ $formatNumber(1000.13, {format: 'integer'}) }}</p>
    <p>{{ $formatDate(Date.now(), {format: 'long'}) }}</p>
    <p>{{ $formatTime(Date.now(), {format: 'medium'}) }}</p>
    <p>{{ $formatRelativeTime(Date.now() - 10000) }}</p>
  </div>
</template>
