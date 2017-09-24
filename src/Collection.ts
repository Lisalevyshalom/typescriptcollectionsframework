/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/

import {ImmutableCollection} from "./ImmutableCollection";
import {JIterator} from "./JIterator";

export interface Collection<T> extends ImmutableCollection<T> {
  /**
  * Ensures that this collection contains the specified element (optional operation).
  * Returns true if this collection changed as a result of the call. (Returns false if this collection does not permit duplicates and already contains the specified element.)
  * Collections that support this operation may place limitations on what elements may be added to this collection. In particular, some collections will refuse to add null elements, and others will impose restrictions on the type of elements that may be added. Collection classes should clearly specify in their documentation any restrictions on what elements may be added.
  * If a collection refuses to add a particular element for any reason other than that it already contains the element, it must throw an exception (rather than returning false). This preserves the invariant that a collection always contains the specified element after this call returns.
  * @param {T} t element to Append
  * @return {boolean} true if this collection changed as a result of the call
  */
  add (t:T) : boolean;

  /**
  * Removes all of the elements from this collection. The list collection be empty after this call returns.
  */
  clear ();

  /**
  * Removes the first occurrence of the specified element from this collection, if it is present. If the list does not contain the element, it is unchanged. More formally, removes the element with the lowest index i such that (o==null ? get(i)==null : o.equals(get(i))) (if such an element exists). Returns true if this list contained the specified element (or equivalently, if this list changed as a result of the call).
  * @param {T} t element to be removed from this collection, if present
  * @return {T} true if this collection contained the specified element
  */
  remove (t:T) : boolean;

  /**
  * Returns an ImmutableCollection backed by this Collection
  */
  immutableCollection () : ImmutableCollection<T>;
}
