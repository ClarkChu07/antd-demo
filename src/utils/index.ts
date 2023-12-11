import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

/**
 * 生成带有前缀的UUID
 * @param prefix 前缀字符串，可选
 * @returns 返回生成的UUID字符串
 */
export function generatePrefixedUUID(prefix?: string): string {
  // 使用UUID生成器生成真正的UUID
  const uuid = uuidv4();
  if (!prefix) {
    return uuid;
  }

  // 标准化前缀
  const normalizedPrefix = prefix
    .trim()
    .replace(/[^a-z0-9_-]/gi, '')
    .replace(/[_-]+/g, '-');
  return `${normalizedPrefix}-${uuid}`;
}
