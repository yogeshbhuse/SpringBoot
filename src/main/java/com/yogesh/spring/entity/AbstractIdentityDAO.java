package com.yogesh.spring.entity;


import javax.persistence.*;

@MappedSuperclass
public abstract class AbstractIdentityDAO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    protected Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AbstractIdentityDAO)) return false;

        AbstractIdentityDAO that = (AbstractIdentityDAO) o;

        return getId() != null ? getId().equals(that.getId()) : that.getId() == null;

    }

    @Override
    public int hashCode() {
        return getId() != null ? getId().hashCode() : 0;
    }

    /**
     * Gets the sort parameter name.
     *
     * @param parameter the parameter
     * @return the sort parameter name
     */
//    protected static String getSortParamName(final DataFilterExpression.SortParameter parameter) {
//        final String value;
//        switch (parameter) {
//            case CREATION_DATE:
//                value = "createdOn";
//                break;
//
//            case MODIFICATION_DATE:
//                value = "modifiedOn";
//                break;
//
//            default:
//                value = "name";
//                break;
//        }
//        return value;
//    }
}
