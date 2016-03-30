import test from 'tape-catch';

/* global document */
import {WebGLRenderingContext} from '../../src/webgl/webgl-types';

import {createGLContext, Program} from '../../src/webgl';
import shaders from '../../src/shaders';

test('WebGL#draw', t => {
  const canvas = document.createElement('canvas');
  const gl = createGLContext(canvas);
  t.ok(gl instanceof WebGLRenderingContext, 'Created gl context');

  const program = new Program(gl, shaders);
  t.ok(program instanceof Program, 'Program construction successful');
  t.end();

  // draw(gl, {
  //  instanced: true,
  // });
});
