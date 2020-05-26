import {
  assertStrictEq,
} from "https://deno.land/std/testing/asserts.ts";

import { escapeHtml } from "../mod.ts";

const { test } = Deno;

test('escapeHtml(string) when string contains \'"\' as only character should replace with "&quot;"', function () {
  assertStrictEq(escapeHtml('"'), "&quot;");
});

test('escapeHtml(string) when string contains \'"\' as first character should replace with "&quot;"', function () {
  assertStrictEq(escapeHtml('"bar'), "&quot;bar");
});

test('escapeHtml(string) when string contains \'"\' as last character should replace with "&quot;"', function () {
  assertStrictEq(escapeHtml('foo"'), "foo&quot;");
});

test('escapeHtml(string) when string contains \'"\' as middle character should replace with "&quot;"', function () {
  assertStrictEq(escapeHtml('foo"bar'), "foo&quot;bar");
});
test('escapeHtml(string) when string contains \'"\' multiple times should replace all occurrances with "&quot;"', function () {
  assertStrictEq(escapeHtml('foo""bar'), "foo&quot;&quot;bar");
});

test('escapeHtml(string) when string contains "&" as only character should replace with "&amp;"', function () {
  assertStrictEq(escapeHtml("&"), "&amp;");
});

test('escapeHtml(string) when string contains "&" as first character should replace with "&amp;"', function () {
  assertStrictEq(escapeHtml("&bar"), "&amp;bar");
});

test('escapeHtml(string) when string contains "&" as last character should replace with "&amp;"', function () {
  assertStrictEq(escapeHtml("foo&"), "foo&amp;");
});

test('escapeHtml(string) when string contains "&" as middle charactershould replace with "&amp;"', function () {
  assertStrictEq(escapeHtml("foo&bar"), "foo&amp;bar");
});

test('escapeHtml(string) when string contains "&" multiple times should replace all occurrances with "&amp;"', function () {
  assertStrictEq(escapeHtml("foo&&bar"), "foo&amp;&amp;bar");
});

test('escapeHtml(string) when string contains "\'" as only character should replace with "&#39;"', function () {
  assertStrictEq(escapeHtml("'"), "&#39;");
});

test('escapeHtml(string) when string contains "\'" as first character should replace with "&#39;"', function () {
  assertStrictEq(escapeHtml("'bar"), "&#39;bar");
});

test('escapeHtml(string) when string contains "\'" as last character should replace with "&#39;"', function () {
  assertStrictEq(escapeHtml("foo'"), "foo&#39;");
});

test('escapeHtml(string) when string contains "\'" as middle character should replace with "&#39;"', function () {
  assertStrictEq(escapeHtml("foo'bar"), "foo&#39;bar");
});

test('escapeHtml(string) when string contains "\'" multiple times should replace all occurrances with "&#39;"', function () {
  assertStrictEq(escapeHtml("foo''bar"), "foo&#39;&#39;bar");
});

test('escapeHtml(string) when string contains "<" as only character should replace with "&lt;"', function () {
  assertStrictEq(escapeHtml("<"), "&lt;");
});

test('escapeHtml(string) when string contains "<" as first character should replace with "&lt;"', function () {
  assertStrictEq(escapeHtml("<bar"), "&lt;bar");
});

test('escapeHtml(string) when string contains "<" as last character should replace with "&lt;"', function () {
  assertStrictEq(escapeHtml("foo<"), "foo&lt;");
});

test('escapeHtml(string) when string contains "<" as middle character should replace with "&lt;"', function () {
  assertStrictEq(escapeHtml("foo<bar"), "foo&lt;bar");
});

test('escapeHtml(string) when string contains "<" multiple timesshould replace all occurrances with "&lt;"', function () {
  assertStrictEq(escapeHtml("foo<<bar"), "foo&lt;&lt;bar");
});

test('escapeHtml(string) when string contains ">" as only character should replace with "&gt;"', function () {
  assertStrictEq(escapeHtml(">"), "&gt;");
});

test('escapeHtml(string) when string contains ">" as first character should replace with "&gt;"', function () {
  assertStrictEq(escapeHtml(">bar"), "&gt;bar");
});

test('escapeHtml(string) when string contains ">" as last character should replace with "&gt;"', function () {
  assertStrictEq(escapeHtml("foo>"), "foo&gt;");
});

test('escapeHtml(string) when string contains ">" as middle character should replace with "&gt;"', function () {
  assertStrictEq(escapeHtml("foo>bar"), "foo&gt;bar");
});

test('escapeHtml(string) when string contains ">" multiple times should replace all occurrances with "&gt;"', function () {
  assertStrictEq(escapeHtml("foo>>bar"), "foo&gt;&gt;bar");
});

test("escapeHtml(string) when escaped character mixed should escape all occurrances", function () {
  assertStrictEq(
    escapeHtml('&foo <> bar "fizz" l\'a'),
    "&amp;foo &lt;&gt; bar &quot;fizz&quot; l&#39;a",
  );
});
