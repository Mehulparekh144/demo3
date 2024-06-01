import {test , expect} from 'vitest';
import { appRouter } from '../../root';
import { db } from '../../../db';

const headers = new Headers({ "content-type": "application/json" });
test('test' , async () => {
  const caller = appRouter.createCaller({headers, db});
  const result = await caller.post.create({name : "world"});
  expect(result).toEqual({name : "world"}); 
})