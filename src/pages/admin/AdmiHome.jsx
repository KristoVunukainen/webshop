import React from 'react'
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AdmiHome() {

  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link} to= "/admin/maintain-categories" variant="primary">{t("Maintain categories")}</Button>{' '}
      <Button as={Link} to= "/admin/maintain-shops"variant="secondary">{t("Maintain shops")}</Button>{' '}
      <Button as={Link} to= "/admin/add-product"variant="success">{t("Add product")}</Button>{' '}
      <Button as={Link} to= "/admin/maintain-product"variant="warning">{t("Maintain product")}</Button>{' '}
    </div>
  )
}

export default AdmiHome