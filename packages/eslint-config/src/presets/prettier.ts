import type { Rules } from '../types';

// Many deprecated rules here, so we expand the type...
export const prettierRules: Record<string, unknown> & Rules = {
  // Begin expansion 'eslint-config-prettier' 'rules'
  curly: 0,
  'no-unexpected-multiline': 0,
  // "@stylistic/lines-around-comment":0,
  // "@stylistic/max-len":0,
  // "@stylistic/no-confusing-arrow":0,
  // "@stylistic/no-mixed-operators":0,
  // "@stylistic/no-tabs":0,
  // "@stylistic/quotes":0,
  // "@stylistic/js/lines-around-comment":0,
  // "@stylistic/js/max-len":0,
  // "@stylistic/js/no-confusing-arrow":0,
  // "@stylistic/js/no-mixed-operators":0,
  // "@stylistic/js/no-tabs":0,
  // "@stylistic/js/quotes":0,
  // "@stylistic/ts/lines-around-comment":0,
  // "@stylistic/ts/quotes":0,
  'ts/lines-around-comment': 0,
  'ts/quotes': 0,
  'babel/quotes': 0,
  'unicorn/template-indent': 0,
  'vue/html-self-closing': 0,
  'vue/max-len': 0,
  '@babel/object-curly-spacing': 'off',
  '@babel/semi': 'off',
  // "@stylistic/array-bracket-newline":"off",
  // "@stylistic/array-bracket-spacing":"off",
  // "@stylistic/array-element-newline":"off",
  // "@stylistic/arrow-parens":"off",
  // "@stylistic/arrow-spacing":"off",
  // "@stylistic/block-spacing":"off",
  // "@stylistic/brace-style":"off",
  // "@stylistic/comma-dangle":"off",
  // "@stylistic/comma-spacing":"off",
  // "@stylistic/comma-style":"off",
  // "@stylistic/computed-property-spacing":"off",
  // "@stylistic/dot-location":"off",
  // "@stylistic/eol-last":"off",
  // "@stylistic/func-call-spacing":"off",
  // "@stylistic/function-call-argument-newline":"off",
  // "@stylistic/function-call-spacing":"off",
  // "@stylistic/function-paren-newline":"off",
  // "@stylistic/generator-star-spacing":"off",
  // "@stylistic/implicit-arrow-linebreak":"off",
  // "@stylistic/indent":"off",
  // "@stylistic/jsx-quotes":"off",
  // "@stylistic/key-spacing":"off",
  // "@stylistic/keyword-spacing":"off",
  // "@stylistic/linebreak-style":"off",
  // "@stylistic/max-statements-per-line":"off",
  // "@stylistic/multiline-ternary":"off",
  // "@stylistic/new-parens":"off",
  // "@stylistic/newline-per-chained-call":"off",
  // "@stylistic/no-extra-parens":"off",
  // "@stylistic/no-extra-semi":"off",
  // "@stylistic/no-floating-decimal":"off",
  // "@stylistic/no-mixed-spaces-and-tabs":"off",
  // "@stylistic/no-multi-spaces":"off",
  // "@stylistic/no-multiple-empty-lines":"off",
  // "@stylistic/no-trailing-spaces":"off",
  // "@stylistic/no-whitespace-before-property":"off",
  // "@stylistic/nonblock-statement-body-position":"off",
  // "@stylistic/object-curly-newline":"off",
  // "@stylistic/object-curly-spacing":"off",
  // "@stylistic/object-property-newline":"off",
  // "@stylistic/one-var-declaration-per-line":"off",
  // "@stylistic/operator-linebreak":"off",
  // "@stylistic/padded-blocks":"off",
  // "@stylistic/quote-props":"off",
  // "@stylistic/rest-spread-spacing":"off",
  // "@stylistic/semi":"off",
  // "@stylistic/semi-spacing":"off",
  // "@stylistic/semi-style":"off",
  // "@stylistic/space-before-blocks":"off",
  // "@stylistic/space-before-function-paren":"off",
  // "@stylistic/space-in-parens":"off",
  // "@stylistic/space-infix-ops":"off",
  // "@stylistic/space-unary-ops":"off",
  // "@stylistic/switch-colon-spacing":"off",
  // "@stylistic/template-curly-spacing":"off",
  // "@stylistic/template-tag-spacing":"off",
  // "@stylistic/wrap-iife":"off",
  // "@stylistic/wrap-regex":"off",
  // "@stylistic/yield-star-spacing":"off",
  // "@stylistic/member-delimiter-style":"off",
  // "@stylistic/type-annotation-spacing":"off",
  // "@stylistic/jsx-child-element-spacing":"off",
  // "@stylistic/jsx-closing-bracket-location":"off",
  // "@stylistic/jsx-closing-tag-location":"off",
  // "@stylistic/jsx-curly-newline":"off",
  // "@stylistic/jsx-curly-spacing":"off",
  // "@stylistic/jsx-equals-spacing":"off",
  // "@stylistic/jsx-first-prop-new-line":"off",
  // "@stylistic/jsx-indent":"off",
  // "@stylistic/jsx-indent-props":"off",
  // "@stylistic/jsx-max-props-per-line":"off",
  // "@stylistic/jsx-newline":"off",
  // "@stylistic/jsx-one-expression-per-line":"off",
  // "@stylistic/jsx-props-no-multi-spaces":"off",
  // "@stylistic/jsx-tag-spacing":"off",
  // "@stylistic/jsx-wrap-multilines":"off",
  // "@stylistic/indent-binary-ops":"off",
  // "@stylistic/type-generic-spacing":"off",
  // "@stylistic/type-named-tuple-spacing":"off",
  // "@stylistic/js/array-bracket-newline":"off",
  // "@stylistic/js/array-bracket-spacing":"off",
  // "@stylistic/js/array-element-newline":"off",
  // "@stylistic/js/arrow-parens":"off",
  // "@stylistic/js/arrow-spacing":"off",
  // "@stylistic/js/block-spacing":"off",
  // "@stylistic/js/brace-style":"off",
  // "@stylistic/js/comma-dangle":"off",
  // "@stylistic/js/comma-spacing":"off",
  // "@stylistic/js/comma-style":"off",
  // "@stylistic/js/computed-property-spacing":"off",
  // "@stylistic/js/dot-location":"off",
  // "@stylistic/js/eol-last":"off",
  // "@stylistic/js/func-call-spacing":"off",
  // "@stylistic/js/function-call-argument-newline":"off",
  // "@stylistic/js/function-call-spacing":"off",
  // "@stylistic/js/function-paren-newline":"off",
  // "@stylistic/js/generator-star-spacing":"off",
  // "@stylistic/js/implicit-arrow-linebreak":"off",
  // "@stylistic/js/indent":"off",
  // "@stylistic/js/jsx-quotes":"off",
  // "@stylistic/js/key-spacing":"off",
  // "@stylistic/js/keyword-spacing":"off",
  // "@stylistic/js/linebreak-style":"off",
  // "@stylistic/js/max-statements-per-line":"off",
  // "@stylistic/js/multiline-ternary":"off",
  // "@stylistic/js/new-parens":"off",
  // "@stylistic/js/newline-per-chained-call":"off",
  // "@stylistic/js/no-extra-parens":"off",
  // "@stylistic/js/no-extra-semi":"off",
  // "@stylistic/js/no-floating-decimal":"off",
  // "@stylistic/js/no-mixed-spaces-and-tabs":"off",
  // "@stylistic/js/no-multi-spaces":"off",
  // "@stylistic/js/no-multiple-empty-lines":"off",
  // "@stylistic/js/no-trailing-spaces":"off",
  // "@stylistic/js/no-whitespace-before-property":"off",
  // "@stylistic/js/nonblock-statement-body-position":"off",
  // "@stylistic/js/object-curly-newline":"off",
  // "@stylistic/js/object-curly-spacing":"off",
  // "@stylistic/js/object-property-newline":"off",
  // "@stylistic/js/one-var-declaration-per-line":"off",
  // "@stylistic/js/operator-linebreak":"off",
  // "@stylistic/js/padded-blocks":"off",
  // "@stylistic/js/quote-props":"off",
  // "@stylistic/js/rest-spread-spacing":"off",
  // "@stylistic/js/semi":"off",
  // "@stylistic/js/semi-spacing":"off",
  // "@stylistic/js/semi-style":"off",
  // "@stylistic/js/space-before-blocks":"off",
  // "@stylistic/js/space-before-function-paren":"off",
  // "@stylistic/js/space-in-parens":"off",
  // "@stylistic/js/space-infix-ops":"off",
  // "@stylistic/js/space-unary-ops":"off",
  // "@stylistic/js/switch-colon-spacing":"off",
  // "@stylistic/js/template-curly-spacing":"off",
  // "@stylistic/js/template-tag-spacing":"off",
  // "@stylistic/js/wrap-iife":"off",
  // "@stylistic/js/wrap-regex":"off",
  // "@stylistic/js/yield-star-spacing":"off",
  // "@stylistic/ts/block-spacing":"off",
  // "@stylistic/ts/brace-style":"off",
  // "@stylistic/ts/comma-dangle":"off",
  // "@stylistic/ts/comma-spacing":"off",
  // "@stylistic/ts/func-call-spacing":"off",
  // "@stylistic/ts/function-call-spacing":"off",
  // "@stylistic/ts/indent":"off",
  // "@stylistic/ts/key-spacing":"off",
  // "@stylistic/ts/keyword-spacing":"off",
  // "@stylistic/ts/member-delimiter-style":"off",
  // "@stylistic/ts/no-extra-parens":"off",
  // "@stylistic/ts/no-extra-semi":"off",
  // "@stylistic/ts/object-curly-spacing":"off",
  // "@stylistic/ts/semi":"off",
  // "@stylistic/ts/space-before-blocks":"off",
  // "@stylistic/ts/space-before-function-paren":"off",
  // "@stylistic/ts/space-infix-ops":"off",
  // "@stylistic/ts/type-annotation-spacing":"off",
  // "@stylistic/jsx/jsx-child-element-spacing":"off",
  // "@stylistic/jsx/jsx-closing-bracket-location":"off",
  // "@stylistic/jsx/jsx-closing-tag-location":"off",
  // "@stylistic/jsx/jsx-curly-newline":"off",
  // "@stylistic/jsx/jsx-curly-spacing":"off",
  // "@stylistic/jsx/jsx-equals-spacing":"off",
  // "@stylistic/jsx/jsx-first-prop-new-line":"off",
  // "@stylistic/jsx/jsx-indent":"off",
  // "@stylistic/jsx/jsx-indent-props":"off",
  // "@stylistic/jsx/jsx-max-props-per-line":"off",
  'ts/block-spacing': 'off',
  'ts/brace-style': 'off',
  'ts/comma-dangle': 'off',
  'ts/comma-spacing': 'off',
  'ts/func-call-spacing': 'off',
  'ts/indent': 'off',
  'ts/key-spacing': 'off',
  'ts/keyword-spacing': 'off',
  'ts/member-delimiter-style': 'off',
  'ts/no-extra-parens': 'off',
  'ts/no-extra-semi': 'off',
  'ts/object-curly-spacing': 'off',
  'ts/semi': 'off',
  'ts/space-before-blocks': 'off',
  'ts/space-before-function-paren': 'off',
  'ts/space-infix-ops': 'off',
  'ts/type-annotation-spacing': 'off',
  'babel/object-curly-spacing': 'off',
  'babel/semi': 'off',
  'flowtype/boolean-style': 'off',
  'flowtype/delimiter-dangle': 'off',
  'flowtype/generic-spacing': 'off',
  'flowtype/object-type-curly-spacing': 'off',
  'flowtype/object-type-delimiter': 'off',
  'flowtype/quotes': 'off',
  'flowtype/semi': 'off',
  'flowtype/space-after-type-colon': 'off',
  'flowtype/space-before-generic-bracket': 'off',
  'flowtype/space-before-type-colon': 'off',
  'flowtype/union-intersection-spacing': 'off',
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': 'off',
  'react/jsx-closing-tag-location': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-curly-spacing': 'off',
  'react/jsx-equals-spacing': 'off',
  'react/jsx-first-prop-new-line': 'off',
  'react/jsx-indent': 'off',
  'react/jsx-indent-props': 'off',
  'react/jsx-max-props-per-line': 'off',
  'react/jsx-newline': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-multi-spaces': 'off',
  'react/jsx-tag-spacing': 'off',
  'react/jsx-wrap-multilines': 'off',
  'standard/array-bracket-even-spacing': 'off',
  'standard/computed-property-even-spacing': 'off',
  'standard/object-curly-even-spacing': 'off',
  'unicorn/empty-brace-spaces': 'off',
  'unicorn/no-nested-ternary': 'off',
  'unicorn/number-literal-case': 'off',
  'vue/array-bracket-newline': 'off',
  'vue/array-bracket-spacing': 'off',
  'vue/array-element-newline': 'off',
  'vue/arrow-spacing': 'off',
  'vue/block-spacing': 'off',
  'vue/block-tag-newline': 'off',
  'vue/brace-style': 'off',
  'vue/comma-dangle': 'off',
  'vue/comma-spacing': 'off',
  'vue/comma-style': 'off',
  'vue/dot-location': 'off',
  'vue/func-call-spacing': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-closing-bracket-spacing': 'off',
  'vue/html-end-tags': 'off',
  'vue/html-indent': 'off',
  'vue/html-quotes': 'off',
  'vue/key-spacing': 'off',
  'vue/keyword-spacing': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/multiline-ternary': 'off',
  'vue/mustache-interpolation-spacing': 'off',
  'vue/no-extra-parens': 'off',
  'vue/no-multi-spaces': 'off',
  'vue/no-spaces-around-equal-signs-in-attribute': 'off',
  'vue/object-curly-newline': 'off',
  'vue/object-curly-spacing': 'off',
  'vue/object-property-newline': 'off',
  'vue/operator-linebreak': 'off',
  'vue/quote-props': 'off',
  'vue/script-indent': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/space-in-parens': 'off',
  'vue/space-infix-ops': 'off',
  'vue/space-unary-ops': 'off',
  'vue/template-curly-spacing': 'off',
  'space-unary-word-ops': 'off',
  'generator-star': 'off',
  'no-comma-dangle': 'off',
  'no-reserved-keys': 'off',
  'no-space-before-semi': 'off',
  'no-wrap-func': 'off',
  'space-after-function-name': 'off',
  'space-before-function-parentheses': 'off',
  'space-in-brackets': 'off',
  'no-arrow-condition': 'off',
  'space-after-keywords': 'off',
  'space-before-keywords': 'off',
  'space-return-throw-case': 'off',
  'no-spaced-func': 'off',
  'indent-legacy': 'off',
  'array-bracket-newline': 'off',
  'array-bracket-spacing': 'off',
  'array-element-newline': 'off',
  'arrow-parens': 'off',
  'arrow-spacing': 'off',
  'block-spacing': 'off',
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'comma-style': 'off',
  'computed-property-spacing': 'off',
  'dot-location': 'off',
  'eol-last': 'off',
  'func-call-spacing': 'off',
  'function-call-argument-newline': 'off',
  'function-paren-newline': 'off',
  'generator-star-spacing': 'off',
  'implicit-arrow-linebreak': 'off',
  indent: 'off',
  'jsx-quotes': 'off',
  'key-spacing': 'off',
  'keyword-spacing': 'off',
  'linebreak-style': 'off',
  'lines-around-comment': 0,
  'max-len': 0,
  'max-statements-per-line': 'off',
  'multiline-ternary': 'off',
  'new-parens': 'off',
  'newline-per-chained-call': 'off',
  'no-confusing-arrow': 0,
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-floating-decimal': 'off',
  'no-mixed-operators': 0,
  'no-mixed-spaces-and-tabs': 'off',
  'no-multi-spaces': 'off',
  'no-multiple-empty-lines': 'off',
  'no-tabs': 0,
  'no-trailing-spaces': 'off',
  'no-whitespace-before-property': 'off',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': 'off',
  'object-curly-spacing': 'off',
  'object-property-newline': 'off',
  'one-var-declaration-per-line': 'off',
  'operator-linebreak': 'off',
  'padded-blocks': 'off',
  'quote-props': 'off',
  quotes: 0,
  'rest-spread-spacing': 'off',
  semi: 'off',
  'semi-spacing': 'off',
  'semi-style': 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-in-parens': 'off',
  'space-infix-ops': 'off',
  'space-unary-ops': 'off',
  'switch-colon-spacing': 'off',
  'template-curly-spacing': 'off',
  'template-tag-spacing': 'off',
  'wrap-iife': 'off',
  'wrap-regex': 'off',
  'yield-star-spacing': 'off',
  'react/jsx-space-before-closing': 'off',
  // End expansion
};
